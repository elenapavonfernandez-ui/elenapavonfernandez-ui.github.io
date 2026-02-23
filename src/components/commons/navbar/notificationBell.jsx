import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const containerRef = useRef(null);

  // 1. Notificaciones actualizadas
  const baseNotifications = [
    { id: 1, text: "Nuevo proyecto publicado 🚀", read: false },
    {
      id: 2,
      text: "Hey como va?, te comento que actualmente estoy formándome en sistemas Cloud",
      read: false,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  // 2. Cargar y Sincronizar
  useEffect(() => {
    const saved = localStorage.getItem("notifications_v2"); // Cambiamos la versión de la key para forzar limpieza
    
    if (saved) {
      const savedArray = JSON.parse(saved);
      // Solo mantenemos el estado de "leído" si el texto es el mismo
      const merged = baseNotifications.map((base) => {
        const found = savedArray.find((s) => s.id === base.id);
        return found && found.text === base.text ? found : base;
      });
      setNotifications(merged);
    } else {
      setNotifications(baseNotifications);
    }
  }, []);

  // 3. Guardar en localStorage
  useEffect(() => {
    if (notifications.length > 0) {
      localStorage.setItem("notifications_v2", JSON.stringify(notifications));
    }
  }, [notifications]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    function handleDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  // Marcar como leídas al abrir
  useEffect(() => {
    if (open && unreadCount > 0) {
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    }
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative rounded-full p-2 hover:bg-gray-700 transition-colors"
      >
        <FaBell className="text-2xl text-white cursor-pointer" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-72 rounded-lg bg-gray-900 shadow-xl border border-gray-800 drop-shadow-[4px_4px_0_#B900BC]">
          <div className="p-4">
            <h4 className="mb-3 text-sm font-bold text-gray-200 drop-shadow-[1px_1px_0_#B900BC]">
              Notificaciones
            </h4>

            <ul className="max-h-60 divide-y divide-gray-800 overflow-auto custom-scrollbar">
              {notifications.map((n) => (
                <li key={n.id} className={`py-3 text-sm ${n.read ? 'text-gray-400' : 'text-white font-medium'}`}>
                  {n.text}
                </li>
              ))}
            </ul>
            
            {notifications.length === 0 && (
              <p className="text-sm text-gray-500">No hay novedades.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}