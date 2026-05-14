const SHARED_LAYOUT = `
<!-- ══════════════ NAVBAR ══════════════ -->
<nav class="erp-navbar">
  <div class="brand">
    <div class="brand-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    </div>
    <span class="brand-name">ERP<span>Nexus</span></span>
  </div>

  <div class="navbar-center">
    <div class="navbar-search">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input type="text" placeholder="Buscar pedidos, clientes, facturas...">
    </div>
  </div>

  <div class="navbar-right">
    <button class="nav-icon-btn" title="Notificaciones">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
      <span class="nav-badge"></span>
    </button>
    <button class="nav-icon-btn" title="Configuración">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    </button>
    <div style="width:1px; height:24px; background:var(--neutral-200); margin:0 4px"></div>
    <div class="user-avatar">AG</div>
    <div class="user-info">
      <span class="user-name">Ana González</span>
      <span class="user-role">Ejecutivo de Ventas</span>
    </div>
  </div>
</nav>

<!-- ══════════════ SIDEBAR ══════════════ -->
<aside class="erp-sidebar">

  <p class="sidebar-section-title">Menú principal</p>
  <ul class="sidebar-nav">
    <li>
      <a href="index.html">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
        Dashboard
      </a>
    </li>
  </ul>

  <div class="sidebar-divider"></div>
  <p class="sidebar-section-title">Maestros</p>
  <ul class="sidebar-nav">
    <li>
      <a href="clientes.html">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        Clientes
      </a>
    </li>
  </ul>

  <div class="sidebar-divider"></div>
  <p class="sidebar-section-title">Ventas</p>
  <ul class="sidebar-nav">
    <li>
      <a href="pedidos.html">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        Pedidos
        <span class="sidebar-badge" id="badge-pedidos">0</span>
      </a>
    </li>
    <li>
      <a href="credito.html">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
        Validación de Crédito
      </a>
    </li>
    <li>
      <a href="factura.html">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        Facturación
      </a>
    </li>
  </ul>

  <div class="sidebar-divider"></div>
  <p class="sidebar-section-title">Reportes</p>
  <ul class="sidebar-nav">
    <li>
      <a href="#" onclick="mostrarToast('Módulo en desarrollo','info'); return false;">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
        Análisis de ventas
      </a>
    </li>
    <li>
      <a href="#" onclick="mostrarToast('Módulo en desarrollo','info'); return false;">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        Estado de cuenta
      </a>
    </li>
  </ul>

  <div class="sidebar-footer">
    <p class="version"><span class="live-dot" style="margin-right:4px"></span>ERP Nexus v2.4.1 — SAP Signavio</p>
  </div>
</aside>
`;

// Inyectar layout antes del contenido
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('layout-wrapper');
  if (wrapper) wrapper.insertAdjacentHTML('afterbegin', SHARED_LAYOUT);

  // Actualizar badge de pedidos pendientes
  setTimeout(() => {
    const badge = document.getElementById('badge-pedidos');
    if (badge) {
      const pendientes = ERP.pedidos.filter(p =>
        ['Validación cliente', 'Validación crédito'].includes(p.estado)
      ).length;
      badge.textContent = pendientes;
      badge.style.display = pendientes ? '' : 'none';
    }
  }, 100);
});
