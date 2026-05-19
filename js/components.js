const SHARED_LAYOUT = `
  <!-- ══════════════ NAVBAR ══════════════ -->
  <nav class="erp-navbar">
    <div class="brand">
      <div class="brand-icon">
        <img src="/img/appicon.png" alt="Logo sap " width="125" height="48">
      </div>
    </div>

    <div class="navbar-right">
      <button class="nav-icon-btn" id="btn-notificaciones" title="Notificaciones" onclick="toggleNotificaciones()" style="position:relative">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <span id="notif-badge" style="display:none; position:absolute; top:2px; right:2px; min-width:16px; height:16px; padding:0 4px; background:var(--danger); border-radius:8px; border:2px solid #fff; font-size:9px; font-weight:800; color:#fff; line-height:12px; text-align:center; font-family:'DM Sans',sans-serif; box-sizing:border-box"></span>
      </button>

      <!-- Panel de notificaciones -->
      <div id="notif-panel" style="display:none; position:fixed; top:calc(var(--navbar-height) + 4px); right:16px; width:340px; background:#fff; border-radius:12px; box-shadow:var(--shadow-lg); border:1px solid var(--neutral-200); z-index:1500; overflow:hidden">
        <div style="padding:14px 18px; border-bottom:1px solid var(--neutral-100); display:flex; align-items:center; justify-content:space-between">
          <span style="font-family:'Outfit',sans-serif; font-weight:700; font-size:.95rem; color:var(--neutral-800)">Notificaciones</span>
          <div style="display:flex; align-items:center; gap:8px">
            <button onclick="limpiarNotificaciones()" title="Limpiar todas" style="border:none; background:none; cursor:pointer; color:var(--neutral-400); font-size:.72rem; font-weight:600; font-family:'DM Sans',sans-serif; padding:3px 7px; border-radius:4px; line-height:1.4" onmouseover="this.style.background='var(--neutral-100)'; this.style.color='var(--neutral-600)'" onmouseout="this.style.background='none'; this.style.color='var(--neutral-400)'">Limpiar todo</button>
            <button onclick="toggleNotificaciones()" style="border:none; background:none; cursor:pointer; color:var(--neutral-400); font-size:1.2rem; line-height:1">×</button>
          </div>
        </div>
        <div id="notif-lista" style="max-height:380px; overflow-y:auto; padding:8px"></div>
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
    <p class="sidebar-section-title">Clientes</p>
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
          Autorización de Crédito
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
      <li>
        <a href="https://tilvalhallaproject.com/apps/track?srsltid=AfmBOooWLVivD2JG4ZnQOjJrKvH2jvq4xsZIm8S9zJg3i3pvUTpZ84jO">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="8" width="13" height="11" rx="1"/>
            <path d="M14 10h4l3 3v5h-7V10z"/>
            <circle cx="5.5" cy="19" r="1.5"/>
            <circle cx="18.5" cy="19" r="1.5"/>
            <line x1="1" y1="13" x2="14" y2="13"/>
          </svg>
          Tranportistas
        </a>
      </li>
      <li>
        <a href="#" onclick="solicitarStockMasivo(); return false;" id="nav-orden-produccion">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          Orden de Producción
          <span class="sidebar-badge sidebar-badge-warning" id="badge-reorden" style="display:none">0</span>
        </a>
      </li>
    </ul>

    <div class="sidebar-divider"></div>
    <p class="sidebar-section-title">Información</p>
    <ul class="sidebar-nav">
      <li>
        <a href="#" onclick="openModal('modal-diagrama-estados'); return false;">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Diagrama de Estados
        </a>
      </li>
      <li>
        <a href="#" onclick="openModal('modal-acerca-de'); return false;">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9.5,9 C9.5,7.5 10.5,6.5 12,6.5 C13.5,6.5 14.5,7.5 14.5,9 C14.5,10.5 13.5,11 12,12 L12,13.5" 
              stroke-linecap="round" 
              stroke-linejoin="round"/>
    
            <line x1="12" y1="16" x2="12.01" y2="16" stroke-linecap="round"/>
          </svg>
          Acerca de
        </a>
      </li>
    </ul>

    <div class="sidebar-footer">
      <p class="version"><span class="live-dot" style="margin-right:4px"></span>SAP And Furious — SAP Signavio</p>
    </div>
  </aside>

  <!-- ══════════════ MODAL: DIAGRAMA DE ESTADOS ══════════════ -->
  <div id="modal-diagrama-estados" class="modal-overlay" style="z-index:2000">
    <div class="modal-box" style="max-width:860px; width:95vw">
      <div class="modal-header">
        <div class="modal-icon" style="background:#dbeafe; font-size:20px">📊</div>
        <div>
          <div class="modal-title">Diagrama de Estados</div>
          <div class="modal-subtitle">Flujo del proceso SAP And Furious</div>
        </div>
      </div>
      <div class="modal-body" style="padding:0 0 8px">
        <div style="background:var(--neutral-50); border-radius:10px; padding:20px; overflow-x:auto">
         <img src="img/Estados.png" alt="Diagrama de Estados" style="width:100%; border-radius:8px; display:block;">
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal('modal-diagrama-estados')">Cerrar</button>
      </div>
    </div>
  </div>

  <!-- ══════════════ MODAL: ACERCA DE ══════════════ -->
  <div id="modal-acerca-de" class="modal-overlay" style="z-index:2000">
    <div class="modal-box" style="max-width:560px; width:95vw">
      <div class="modal-header">
        <div class="modal-icon" style="background:#f0f9ff; font-size:20px">👥</div>
        <div>
          <div class="modal-title">Acerca de SAP & Furious</div>
          <div class="modal-subtitle">Equipo de desarrollo</div>
        </div>
      </div>
      <div class="modal-body">
        <div style="text-align:center; margin-bottom:20px">
          <div style="font-size:.85rem; color:var(--neutral-500); margin-bottom:4px">Versión</div>
          <div style="font-size:1.4rem; font-weight:800; color:var(--primary-mid)">SAP And Furious</div>
          <div style="font-size:.8rem; color:var(--neutral-400); margin-top:4px">Sistema de Gestión Empresarial · SAP Signavio</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:8px">

  <div style="background:linear-gradient(135deg,#fce7f3,#fdf2f8); border:1px solid #f9a8d4; border-radius:12px; padding:16px; text-align:center; grid-column:1/-1">
    <div style="font-size:2rem; margin-bottom:6px">👩‍🏫</div>
    <div style="font-weight:700; font-size:.9rem; color:#9d174d">Dra. Patricia MZ</div>
    <div style="font-size:.75rem; color:#be185d; margin-top:2px">ORCID: 0000-0001-6580-4243</div>
    <div style="font-size:.75rem; color:#be185d; margin-top:2px">Asesora</div>
  </div>

  <div style="background:linear-gradient(135deg,#e0f2fe,#f0f9ff); border:1px solid #7dd3fc; border-radius:12px; padding:16px; text-align:center">
    <div style="font-size:2rem; margin-bottom:6px">👩‍💻</div>
    <div style="font-weight:700; font-size:.9rem; color:#075985">Carolina RP</div>
    <div style="font-size:.75rem; color:#0369a1; margin-top:2px">Desarrolladora</div>
  </div>

  <div style="background:linear-gradient(135deg,#dcfce7,#f0fdf4); border:1px solid #86efac; border-radius:12px; padding:16px; text-align:center">
    <div style="font-size:2rem; margin-bottom:6px">👩‍💻</div>
    <div style="font-weight:700; font-size:.9rem; color:#14532d">Debanhi LA</div>
    <div style="font-size:.75rem; color: #73c8a5bd; margin-top:2px">ORCID: 0009-0008-9571-8395</div>
    <div style="font-size:.75rem; color:#15803d; margin-top:2px">Desarrolladora</div>
  </div>

   <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7); border:1px solid #86efac; border-radius:12px; padding:16px; text-align:center">
    <div style="font-size:2rem; margin-bottom:6px">👨‍💻</div>
    <div style="font-weight:700; font-size:.9rem; color:#14532d">Hisham RM</div>
    <div style="font-size:.75rem; color: #73c8a5bd; margin-top:2px">ORCID: 0009-0007-5475-363X</div>
    <div style="font-size:.75rem; color:#15803d; margin-top:2px">Desarrollador</div>
  </div>

  <div style="background:linear-gradient(135deg,#fff7ed,#fef3c7); border:1px solid #fcd34d; border-radius:12px; padding:16px; text-align:center">
    <div style="font-size:2rem; margin-bottom:6px">👩‍💻</div>
    <div style="font-weight:700; font-size:.9rem; color:#78350f">Ilde RC</div>
    <div style="font-size:.75rem; color:#92400e; margin-top:2px">Desarrolladora</div>
  </div>

  <div style="background:linear-gradient(135deg,#ede9fe,#f5f3ff); border:1px solid #c4b5fd; border-radius:12px; padding:16px; text-align:center">
    <div style="font-size:2rem; margin-bottom:6px">👩‍💻</div>
    <div style="font-weight:700; font-size:.9rem; color:#4c1d94">María José EM</div>
    <div style="font-size:.75rem; color:#6d28d9; margin-top:2px">Desarrolladora</div>
  </div>

 

</div>

        </div>
        <div style="text-align:center; margin-top:20px; font-size:.75rem; color:var(--neutral-400)">
          © 2024 SAP And Furious · Todos los derechos reservados
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" onclick="closeModal('modal-acerca-de')">Cerrar</button>
      </div>
    </div>
  </div>`;

  /* ── SISTEMA DE NOTIFICACIONES ── */

  const NOTIF_COLORES = {
    'SOLICITADA': { bg: '#ede9fe', border: '#a78bfa', texto: '#5b21b6', label: 'Solicitud de Producción' },
    'PLANIFICADA': { bg: '#dbeafe', border: '#60a5fa', texto: '#1d4ed8', label: 'Orden Planificada' },
    'PRODUCCIÓN':  { bg: '#ffedd5', border: '#fb923c', texto: '#c2410c', label: 'En Producción' },
    'APROBADA':    { bg: '#dcfce7', border: '#4ade80', texto: '#15803d', label: 'Orden Aprobada' },
    'REPROCESO':   { bg: '#fee2e2', border: '#f87171', texto: '#b91c1c', label: 'En Reproceso' },
  };

  function toggleNotificaciones() {
    const panel = document.getElementById('notif-panel');
    if (!panel) return;
    const visible = panel.style.display !== 'none';
    panel.style.display = visible ? 'none' : '';
    if (!visible) renderNotificaciones();
  }

  document.addEventListener('click', e => {
    const panel  = document.getElementById('notif-panel');
    const btnN   = document.getElementById('btn-notificaciones');
    if (panel && !panel.contains(e.target) && btnN && !btnN.contains(e.target)) {
      panel.style.display = 'none';
    }
  });

  function actualizarBadgeNotif() {
    const badge = document.getElementById('notif-badge');
    if (!badge) return;
    const estadosActivos = ['SOLICITADA', 'PLANIFICADA', 'PRODUCCIÓN'];
    const activas = ERP.notificaciones.filter(n => !n.oculta && estadosActivos.includes(n.estado));
    if (activas.length > 0) {
      badge.textContent = activas.length > 9 ? '9+' : String(activas.length);
      badge.style.display = '';
    } else {
      badge.style.display = 'none';
    }
  }

  function limpiarNotificaciones() {
    const cerradas = ['APROBADA', 'REPROCESO'];
    ERP.notificaciones = ERP.notificaciones.filter(n => !cerradas.includes(n.estado));
    saveState();
    actualizarBadgeNotif();
    actualizarBadgeReorden();
    renderNotificaciones();
    mostrarToast('Historial de órdenes limpiado', 'success');
  }

  function renderNotificaciones() {
    const lista = document.getElementById('notif-lista');
    if (!lista) return;
    // Mostrar solo notificaciones que no estén ocultas
    const visibles = ERP.notificaciones.filter(n => !n.oculta);
    if (visibles.length === 0) {
      lista.innerHTML = `<div style="text-align:center; padding:28px; color:var(--neutral-400); font-size:.85rem">Sin notificaciones</div>`;
      return;
    }
    lista.innerHTML = '';
    [...visibles].reverse().forEach(n => {
      const col = NOTIF_COLORES[n.estado] || NOTIF_COLORES['SOLICITADA'];
      const div = document.createElement('div');
      div.style.cssText = `background:${col.bg}; border:1px solid ${col.border}; border-radius:8px; padding:12px 14px; margin-bottom:8px; cursor:pointer; transition:opacity .2s`;
      div.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px">
          <span style="font-size:.65rem; font-weight:800; text-transform:uppercase; letter-spacing:.8px; color:${col.texto}">${n.estado}</span>
          <span style="font-size:.7rem; color:${col.texto}; opacity:.7">${n.fecha || ''}</span>
        </div>
        <div style="font-size:.82rem; font-weight:600; color:${col.texto}">${col.label}</div>
        <div style="font-size:.75rem; color:${col.texto}; opacity:.8; margin-top:2px">${n.producto}</div>
      `;
      div.onclick = () => { toggleNotificaciones(); abrirModalNotif(n.id); };
      lista.appendChild(div);
    });
  }

  function agregarNotificacion(estado, producto, cantidad, ordenId, extra) {
    const id = 'notif-' + Date.now();
    // _codigo se pasa en extra desde enviarPlanificador/enviarOperario para preservar el código limpio
    const codigoProducto = (extra && extra._codigo)
      ? extra._codigo
      : (producto ? producto.split(' — ')[0].trim() : '');
    const extraLimpio = extra ? { ...extra } : {};
    delete extraLimpio._codigo;
    ERP.notificaciones.push({
      id, estado, producto, codigoProducto, cantidad,
      ordenId: ordenId || id,
      fecha: new Date().toLocaleDateString('es-MX'),
      extra: extraLimpio,
      oculta: false,
      cerrada: false
    });
    saveState();
    actualizarBadgeNotif();
    mostrarToast('Correo y Notificaciones Enviadas', 'success');
    return id;
  }

  function abrirModalNotif(id) {
    const n = ERP.notificaciones.find(x => x.id === id);
    if (!n) return;

    if (n.estado === 'SOLICITADA') abrirModalPlanificador(n);
    else if (n.estado === 'PLANIFICADA') abrirModalOperario(n);
    else if (n.estado === 'PRODUCCIÓN') abrirModalInspector(n);
    else if (n.estado === 'APROBADA' || n.estado === 'REPROCESO') abrirModalCerrado(n);
  }

  /* ── Modal Planificador ── */
  function abrirModalPlanificador(n) {
    let overlay = document.getElementById('modal-planificador');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'modal-planificador';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal-box">
          <div class="modal-header">
            <div class="modal-icon" style="background:#dbeafe; font-size:20px">📋</div>
            <div>
              <div class="modal-title">RESPONDIENDO CON EL ROL: PLANIFICADOR</div>
              <div class="modal-subtitle" id="plan-subtitulo"></div>
            </div>
          </div>
          <div class="modal-body">
            <div class="form-group" style="margin-bottom:14px">
              <label>Producto solicitado</label>
              <input type="text" id="plan-producto" class="form-control" readonly>
            </div>
            <div class="form-group" style="margin-bottom:14px">
              <label>Cantidad a producir</label>
              <input type="number" id="plan-cantidad" class="form-control" readonly>
            </div>
            <div class="form-group" style="margin-bottom:14px">
              <label>Fecha de producción <span style="color:var(--danger)">*</span></label>
              <input type="date" id="plan-fecha" class="form-control" oninput="validarFechaPlanificador(this)">
            </div>
            <div class="form-group">
              <label>Observaciones de planificación</label>
              <textarea id="plan-obs" class="form-control" rows="2" placeholder="Notas para el operario..."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-planificador')">Cerrar</button>
            <button class="btn btn-primary" onclick="enviarPlanificador()">Enviar</button>
          </div>
        </div>`;
      document.body.appendChild(overlay);
    }

    document.getElementById('plan-subtitulo').textContent = 'Orden: ' + n.ordenId;
    document.getElementById('plan-producto').value  = n.producto;
    document.getElementById('plan-cantidad').value  = n.cantidad;
    const planFechaEl = document.getElementById('plan-fecha');
    planFechaEl.value = '';
    planFechaEl.min   = new Date().toISOString().slice(0,10);
    planFechaEl.classList.remove('is-invalid');
    document.getElementById('plan-obs').value       = '';
    overlay.dataset.notifId = n.id;
    openModal('modal-planificador');
  }

  function validarFechaPlanificador(input) {
    const hoy = new Date().toISOString().slice(0,10);
    if (input.value && input.value < hoy) {
      input.classList.add('is-invalid');
      mostrarToast('La Fecha de Producción no puede ser anterior a hoy', 'warning');
    } else {
      input.classList.remove('is-invalid');
    }
  }

  function enviarPlanificador() {
    const overlay = document.getElementById('modal-planificador');
    const n = ERP.notificaciones.find(x => x.id === overlay.dataset.notifId);
    if (!n) return;
    const fecha = document.getElementById('plan-fecha').value;
    if (!fecha) { mostrarToast('Ingresa la fecha de producción', 'warning'); return; }
    const hoy = new Date().toISOString().slice(0,10);
    if (fecha < hoy) {
      document.getElementById('plan-fecha').classList.add('is-invalid');
      mostrarToast('La Fecha de Producción no puede ser anterior a hoy', 'warning');
      return;
    }
    n.extra.fechaProd = fecha;
    n.extra.obs = document.getElementById('plan-obs').value;
    // Ocultar la notif SOLICITADA para que no vuelva a aparecer (evita el ciclo)
    n.oculta = true;
    closeModal('modal-planificador');
    agregarNotificacion('PLANIFICADA', n.producto, n.cantidad, n.ordenId, { fechaProd: fecha, _codigo: n.codigoProducto });
  }

  /* ── Modal Operario ── */
  function abrirModalOperario(n) {
    let overlay = document.getElementById('modal-operario');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'modal-operario';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal-box">
          <div class="modal-header">
            <div class="modal-icon" style="background:#ffedd5; font-size:20px">🔧</div>
            <div>
              <div class="modal-title">RESPONDIENDO CON EL ROL: OPERARIO</div>
              <div class="modal-subtitle" id="oper-subtitulo"></div>
            </div>
          </div>
          <div class="modal-body">
            <p style="font-size:.875rem; color:var(--neutral-600); margin-bottom:16px">
              Confirma el inicio de fabricación del siguiente producto:
            </p>
            <div style="background:var(--neutral-50); border:1px solid var(--neutral-200); border-radius:8px; padding:12px 16px; margin-bottom:16px; font-size:.875rem">
              <div><strong>Producto:</strong> <span id="oper-producto"></span></div>
              <div style="margin-top:4px"><strong>Cantidad:</strong> <span id="oper-cantidad"></span></div>
              <div style="margin-top:4px"><strong>Fecha programada:</strong> <span id="oper-fecha"></span></div>
            </div>
            <label class="erp-checkbox" id="label-chk-fabricacion">
              <input type="checkbox" id="chk-fabricacion" onchange="this.closest('label').classList.toggle('checked', this.checked)">
              <div>
                <div class="checkbox-label">En fabricación</div>
                <div class="checkbox-hint">Confirmo que el proceso de fabricación ha iniciado.</div>
              </div>
            </label>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-operario')">Cerrar</button>
            <button class="btn btn-primary" onclick="enviarOperario()">Enviar</button>
          </div>
        </div>`;
      document.body.appendChild(overlay);
    }

    document.getElementById('oper-subtitulo').textContent = 'Orden: ' + n.ordenId;
    document.getElementById('oper-producto').textContent  = n.producto;
    document.getElementById('oper-cantidad').textContent  = n.cantidad;
    document.getElementById('oper-fecha').textContent     = n.extra?.fechaProd || '—';
    document.getElementById('chk-fabricacion').checked   = false;
    document.getElementById('label-chk-fabricacion').classList.remove('checked');
    overlay.dataset.notifId = n.id;
    openModal('modal-operario');
  }

  function enviarOperario() {
    const overlay = document.getElementById('modal-operario');
    const n = ERP.notificaciones.find(x => x.id === overlay.dataset.notifId);
    if (!n) return;
    if (!document.getElementById('chk-fabricacion').checked) {
      mostrarToast('Marca la casilla "En fabricación"', 'warning'); return;
    }
    // Ocultar la notif PLANIFICADA para que no vuelva a aparecer (evita el ciclo)
    n.oculta = true;
    closeModal('modal-operario');
    agregarNotificacion('PRODUCCIÓN', n.producto, n.cantidad, n.ordenId, { ...n.extra, _codigo: n.codigoProducto });
  }

  /* ── Modal Inspector ── */
  function abrirModalInspector(n) {
    let overlay = document.getElementById('modal-inspector');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'modal-inspector';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal-box">
          <div class="modal-header">
            <div class="modal-icon" style="background:#dcfce7; font-size:20px">🔍</div>
            <div>
              <div class="modal-title">RESPONDIENDO CON EL ROL: INSPECTOR</div>
              <div class="modal-subtitle" id="insp-subtitulo"></div>
            </div>
          </div>
          <div class="modal-body">
            <p style="font-size:.875rem; color:var(--neutral-600); margin-bottom:16px">
              Resultado de la inspección de calidad:
            </p>
            <div style="display:flex; flex-direction:column; gap:10px">
              <label class="erp-checkbox" id="label-chk-aprobado">
                <input type="checkbox" id="chk-aprobado" onchange="toggleInspector('aprobado')">
                <div>
                  <div class="checkbox-label" style="color:var(--success)">✓ Aprobado</div>
                  <div class="checkbox-hint">La producción cumple con los estándares de calidad.</div>
                </div>
              </label>
              <label class="erp-checkbox" id="label-chk-no-aprobado">
                <input type="checkbox" id="chk-no-aprobado" onchange="toggleInspector('no-aprobado')">
                <div>
                  <div class="checkbox-label" style="color:var(--danger)">✕ No aprobado</div>
                  <div class="checkbox-hint">La producción requiere reproceso.</div>
                </div>
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-inspector')">Cerrar</button>
            <button class="btn btn-primary" onclick="enviarInspector()">Enviar</button>
          </div>
        </div>`;
      document.body.appendChild(overlay);
    }

    document.getElementById('insp-subtitulo').textContent = 'Orden: ' + n.ordenId;
    document.getElementById('chk-aprobado').checked    = false;
    document.getElementById('chk-no-aprobado').checked = false;
    document.getElementById('label-chk-aprobado').classList.remove('checked');
    document.getElementById('label-chk-no-aprobado').classList.remove('checked');
    document.getElementById('chk-aprobado').disabled    = false;
    document.getElementById('chk-no-aprobado').disabled = false;
    overlay.dataset.notifId = n.id;
    openModal('modal-inspector');
  }

  function toggleInspector(cual) {
    const chkA  = document.getElementById('chk-aprobado');
    const chkN  = document.getElementById('chk-no-aprobado');
    const lblA  = document.getElementById('label-chk-aprobado');
    const lblN  = document.getElementById('label-chk-no-aprobado');
    if (cual === 'aprobado') {
      chkN.checked = false; lblN.classList.remove('checked');
      lblA.classList.toggle('checked', chkA.checked);
    } else {
      chkA.checked = false; lblA.classList.remove('checked');
      lblN.classList.toggle('checked', chkN.checked);
    }
  }

  function enviarInspector() {
    const overlay = document.getElementById('modal-inspector');
    const n = ERP.notificaciones.find(x => x.id === overlay.dataset.notifId);
    if (!n) return;

    const aprobado   = document.getElementById('chk-aprobado').checked;
    const noAprobado = document.getElementById('chk-no-aprobado').checked;
    if (!aprobado && !noAprobado) { mostrarToast('Selecciona un resultado', 'warning'); return; }

    document.getElementById('chk-aprobado').disabled    = true;
    document.getElementById('chk-no-aprobado').disabled = true;
    closeModal('modal-inspector');

    // Ocultar todas las notificaciones de esta orden (ya terminó, sea aprobada o reproceso)
    ERP.notificaciones.forEach(x => {
      if (x.ordenId === n.ordenId) x.oculta = true;
    });

    if (aprobado) {
      // Crear notificación de cierre APROBADA (visible para historial)
      const idAprobada = 'notif-aprobada-' + Date.now();
      ERP.notificaciones.push({
        id: idAprobada, estado: 'APROBADA',
        producto: n.producto,
        codigoProducto: n.codigoProducto,
        cantidad: n.cantidad,
        ordenId: n.ordenId,
        fecha: new Date().toLocaleDateString('es-MX'),
        extra: n.extra || {},
        oculta: false,
        cerrada: true
      });

      // Sumar al stock — codigoProducto ya viene limpio desde la creación de la notif
      const codigo = n.codigoProducto || (n.producto ? n.producto.split(' — ')[0].trim() : '');
      const prod = ERP.productos.find(p => p.codigo === codigo);
      if (prod) {
        const stockTotalActual = ERP.productos.reduce((s, p) => s + (p.stock || 0), 0);
        const nuevoStockProd   = (prod.stock || 0) + (n.cantidad || 0);
        const nuevoStockTotal  = stockTotalActual + (n.cantidad || 0);

        if (nuevoStockProd > MAX_STOCK_PROD) {
          mostrarToast(`⚠ No se puede agregar: ${prod.codigo} superaría el límite de ${MAX_STOCK_PROD} cajas por producto (tendría ${nuevoStockProd}).`, 'danger');
          saveState(); actualizarBadgeReorden(); return;
        }
        if (nuevoStockTotal > MAX_STOCK_TOTAL) {
          mostrarToast(`⚠ No se puede agregar: el inventario total superaría la capacidad de ${MAX_STOCK_TOTAL} cajas (quedaría en ${nuevoStockTotal}).`, 'warning');
          saveState(); actualizarBadgeReorden(); return;
        }

        prod.stock = nuevoStockProd;
        saveState();
        actualizarBadgeReorden();
        mostrarToast(`✓ Stock de ${prod.codigo} actualizado (+${n.cantidad} uds)`, 'success');
      } else {
        saveState();
        mostrarToast('Orden de Producción aprobada', 'success');
      }
    } else {
      // Reproceso: registrar y relanzar con nuevo ordenId (sin ciclar)
      const idReproceso = 'notif-rep-' + Date.now();
      ERP.notificaciones.push({
        id: idReproceso, estado: 'REPROCESO',
        producto: n.producto,
        codigoProducto: n.codigoProducto || (n.producto ? n.producto.split('—')[0].trim() : ''),
        cantidad: n.cantidad,
        ordenId: n.ordenId,
        fecha: new Date().toLocaleDateString('es-MX'),
        extra: n.extra || {},
        oculta: false,
        cerrada: true
      });
      saveState();
      mostrarToast('Orden en reproceso — se reabrirá la solicitud', 'warning');

      // Nueva SOLICITADA con ordenId fresco para reiniciar el ciclo limpiamente
      setTimeout(() => {
        const nuevaId = 'notif-' + (Date.now() + 1);
        ERP.notificaciones.push({
          id: nuevaId, estado: 'SOLICITADA',
          producto: n.producto,
          codigoProducto: n.codigoProducto || (n.producto ? n.producto.split('—')[0].trim() : ''),
          cantidad: n.cantidad,
          ordenId: 'ORD-' + Date.now() + '-rep',
          fecha: new Date().toLocaleDateString('es-MX'),
          extra: {},
          oculta: false,
          cerrada: false
        });
        saveState();
        actualizarBadgeNotif();
        mostrarToast('Nueva solicitud de producción enviada', 'info');
      }, 600);
    }

    actualizarBadgeNotif();
  }

  /* ── Modal cerrado (APROBADA / REPROCESO) ── */
  function abrirModalCerrado(n) {
    let overlay = document.getElementById('modal-cerrado-notif');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'modal-cerrado-notif';
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal-box">
          <div class="modal-header">
            <div class="modal-icon" id="cerrado-icon" style="font-size:20px"></div>
            <div>
              <div class="modal-title" id="cerrado-titulo"></div>
              <div class="modal-subtitle" id="cerrado-subtitulo"></div>
            </div>
          </div>
          <div class="modal-body">
            <div style="background:var(--neutral-50); border:1px solid var(--neutral-200); border-radius:8px; padding:14px 16px; font-size:.875rem">
              <div><strong>Producto:</strong> <span id="cerrado-producto"></span></div>
              <div style="margin-top:4px"><strong>Cantidad:</strong> <span id="cerrado-cantidad"></span></div>
              <div style="margin-top:4px"><strong>Estado final:</strong> <span id="cerrado-estado-badge"></span></div>
            </div>
            <p style="margin-top:14px; font-size:.82rem; color:var(--neutral-500)">Este registro es de solo lectura y no puede modificarse.</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('modal-cerrado-notif')">Cerrar</button>
          </div>
        </div>`;
      document.body.appendChild(overlay);
    }

    const col = NOTIF_COLORES[n.estado];
    document.getElementById('cerrado-icon').style.background = col?.bg || '#f0f0f0';
    document.getElementById('cerrado-icon').textContent = n.estado === 'APROBADA' ? '✅' : '🔄';
    document.getElementById('cerrado-titulo').textContent    = n.estado === 'APROBADA' ? 'Orden de Producción Confirmada' : 'Orden en Reproceso';
    document.getElementById('cerrado-subtitulo').textContent = 'Orden: ' + n.ordenId;
    document.getElementById('cerrado-producto').textContent  = n.producto;
    document.getElementById('cerrado-cantidad').textContent  = n.cantidad;
    document.getElementById('cerrado-estado-badge').innerHTML = badgeHTML(n.estado === 'APROBADA' ? 'activo' : 'bloqueado');
    openModal('modal-cerrado-notif');
  }

  /* ── Actualizar badge de punto de reorden ── */
  function actualizarBadgeReorden() {
    const badge = document.getElementById('badge-reorden');
    if (!badge) return;
    const estadosActivos = ['SOLICITADA', 'PLANIFICADA', 'PRODUCCIÓN'];
    const productosConOrdenActiva = new Set(
      ERP.notificaciones
        .filter(n => !n.oculta && estadosActivos.includes(n.estado))
        .map(n => n.codigoProducto)
    );
    // Solo contar productos que estén en ROP Y cuyo déficit sea >= MIN_ORDEN_PROD
    const sinOrden = ERP.productos.filter(p =>
      p.stock <= p.rop &&
      (p.rop - p.stock) >= MIN_ORDEN_PROD &&
      !productosConOrdenActiva.has(p.codigo)
    ).length;
    badge.textContent = sinOrden;
    badge.style.display = sinOrden > 0 ? '' : 'none';
  }

  /* ── Orden de Producción masiva: solicita stock para todos los productos en punto de reorden ── */
  function solicitarStockMasivo() {
    const estadosActivos = ['SOLICITADA', 'PLANIFICADA', 'PRODUCCIÓN'];
    const productosConOrdenActiva = new Set(
      ERP.notificaciones
        .filter(n => !n.oculta && estadosActivos.includes(n.estado))
        .map(n => n.codigoProducto)
    );
    const productosReorden = ERP.productos.filter(p =>
      p.stock <= p.rop &&
      (p.rop - p.stock) >= MIN_ORDEN_PROD &&
      !productosConOrdenActiva.has(p.codigo)
    );

    if (productosReorden.length === 0) {
      const totalReorden = ERP.productos.filter(p => p.stock <= p.rop).length;
      mostrarToast(
        totalReorden > 0
          ? 'Todos los productos en reorden ya tienen órdenes activas'
          : 'Todos los productos tienen stock suficiente',
        'info'
      );
      return;
    }

    // Construir lista de productos con el mismo formato que abrirModalSolicitarStock
    const productosParaOrden = productosReorden.map(p => {
      const deficit   = Math.max(1, p.rop - p.stock);            // mínimo necesario para llegar al ROP
      const maxCaben  = MAX_STOCK_PROD - p.stock;                // cajas que caben hasta 250
      const sugerido  = Math.min(deficit, Math.max(1, maxCaben)); // no sugerir más de lo que cabe
      return {
        codigo:      p.codigo,
        descripcion: p.descripcion,
        stock:       p.stock,
        rop:         p.rop,
        cantPedida:  0,
        faltante:    sugerido
      };
    });

    // Reutilizar el modal de solicitar-stock si existe (estamos en credito.html),
    // si no, crear uno dinámico equivalente
    if (typeof abrirModalSolicitarStock === 'function') {
      abrirModalSolicitarStock(productosParaOrden);
      return;
    }

    // Modal dinámico para páginas que no son credito.html
    let overlay = document.getElementById('modal-orden-produccion-masiva');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'modal-orden-produccion-masiva';
      overlay.className = 'modal-overlay';
      document.body.appendChild(overlay);
    }

    const itemsHTML = productosParaOrden.map((p, idx) => {
      const maxPorProd = MAX_STOCK_PROD - p.stock;  // cajas que caben hasta llegar a 250
      const minCant    = Math.max(1, p.rop - p.stock); // mínimo = déficit respecto al ROP
      const sugerido   = Math.min(p.faltante, maxPorProd);
      return `
      <div style="background:var(--neutral-50); border:1px solid var(--neutral-200); border-radius:8px; padding:14px 16px; margin-bottom:10px">
        <div style="font-weight:700; font-size:.875rem; color:var(--neutral-800); margin-bottom:8px">${p.codigo} — ${p.descripcion}</div>
        <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:8px; margin-bottom:10px; font-size:.78rem; color:var(--neutral-500)">
          <div>Stock actual: <strong style="color:var(--neutral-700)">${p.stock}</strong></div>
          <div>Pto. reorden: <strong style="color:var(--warning)">${p.rop}</strong></div>
          <div>Déficit: <strong style="color:var(--danger)">${Math.max(0, p.rop - p.stock)}</strong></div>
          <div>Máx. permitido: <strong style="color:var(--neutral-700)">${maxPorProd}</strong></div>
        </div>
        <div class="form-group" style="margin:0">
          <label style="font-size:.78rem">
            Cantidad a producir <span style="color:var(--danger)">*</span>
            <span style="color:var(--neutral-400); font-weight:400">
              (mín. ${minCant} — máx. ${maxPorProd})
            </span>
          </label>
          <input type="number" id="masivo-cant-${idx}" class="form-control"
            value="${sugerido}" min="${minCant}" max="${maxPorProd}"
            oninput="
              var v=parseInt(this.value)||0;
              if(v<${minCant}){ this.value=${minCant}; }
              if(v>${maxPorProd}){ this.value=${maxPorProd}; mostrarToast('La cantidad no puede superar el máximo de ${maxPorProd} cajas para este producto (límite 250 por producto).','warning'); }
            ">
        </div>
      </div>
    `}).join('');

    overlay.innerHTML = `
      <div class="modal-box" style="max-width:580px; width:95vw">
        <div class="modal-header">
          <div class="modal-icon" style="background:#fff7ed; font-size:20px">🏭</div>
          <div>
            <div class="modal-title">Orden de Producción</div>
            <div class="modal-subtitle">${productosParaOrden.length} producto${productosParaOrden.length !== 1 ? 's' : ''} en punto de reorden</div>
          </div>
        </div>
        <div class="modal-body" style="max-height:55vh; overflow-y:auto">
          <p style="font-size:.85rem; color:var(--neutral-600); margin-bottom:14px">
            Los siguientes productos están por debajo de su punto de reorden. Confirma las cantidades a producir:
          </p>
          ${itemsHTML}
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="closeModal('modal-orden-produccion-masiva')">Cancelar</button>
          <button class="btn btn-warning" onclick="enviarOrdenProduccionMasiva()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
            </svg>
            Enviar Órdenes de Producción
          </button>
        </div>
      </div>`;

    overlay.dataset.count = productosParaOrden.length;
    overlay._productos = productosParaOrden;
    openModal('modal-orden-produccion-masiva');
  }

  function enviarOrdenProduccionMasiva() {
    const overlay = document.getElementById('modal-orden-produccion-masiva');
    if (!overlay || !overlay._productos) return;

    // ── Validar capacidades ANTES de crear ninguna orden ──
    const stockTotalActual = ERP.productos.reduce((s, p) => s + (p.stock || 0), 0);
    let cantidadTotalSolicitada = 0;
    const errores = [];

    overlay._productos.forEach((p, idx) => {
      const cantEl = document.getElementById(`masivo-cant-${idx}`);
      const cant   = cantEl ? parseInt(cantEl.value) : p.faltante;
      const prod   = ERP.productos.find(x => x.codigo === p.codigo);
      const stockActual = prod ? prod.stock : p.stock;
      const minCant = Math.max(1, p.rop - stockActual);
      const maxPorProd = MAX_STOCK_PROD - stockActual;

      if (cant < minCant) {
        errores.push(`${p.codigo}: la cantidad mínima es ${minCant} (déficit respecto al ROP).`);
      }
      if (cant > maxPorProd) {
        errores.push(`${p.codigo}: la cantidad ${cant} haría que el stock supere el máximo de ${MAX_STOCK_PROD} cajas por producto.`);
      }
      cantidadTotalSolicitada += cant;
    });

    if (errores.length > 0) {
      mostrarToast(errores[0], 'danger');
      return;
    }

    // Verificar que el stock total proyectado no supere la capacidad del almacén (1200)
    const stockTotalProyectado = stockTotalActual + cantidadTotalSolicitada;
    if (stockTotalProyectado > MAX_STOCK_TOTAL) {
      mostrarToast(
        `La suma de stock actual (${stockTotalActual}) + cantidad solicitada (${cantidadTotalSolicitada}) = ${stockTotalProyectado} cajas, lo que supera la capacidad máxima del almacén de ${MAX_STOCK_TOTAL} cajas. Reduce las cantidades antes de enviar.`,
        'danger'
      );
      return;
    }

    // ── Crear las órdenes ──
    const base = Date.now();
    overlay._productos.forEach((p, idx) => {
      const cantEl = document.getElementById(`masivo-cant-${idx}`);
      const cant   = cantEl ? parseInt(cantEl.value) : p.faltante;
      const ordenId = 'ORD-' + (base + idx) + '-' + idx;
      const id = 'notif-' + (base + idx);
      ERP.notificaciones.push({
        id, estado: 'SOLICITADA',
        producto: `${p.codigo} — ${p.descripcion}`,
        codigoProducto: p.codigo,
        cantidad: cant,
        ordenId,
        fecha: new Date().toLocaleDateString('es-MX'),
        extra: {},
        oculta: false,
        cerrada: false
      });
    });

    saveState();
    actualizarBadgeNotif();
    actualizarBadgeReorden();
    closeModal('modal-orden-produccion-masiva');
    const n = overlay._productos.length;
    mostrarToast(`${n} orden${n !== 1 ? 'es' : ''} de producción enviada${n !== 1 ? 's' : ''}`, 'success');
  }

  // Inyectar layout antes del contenido
  document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('layout-wrapper');
    if (wrapper) wrapper.insertAdjacentHTML('afterbegin', SHARED_LAYOUT);

    // Migrar notificaciones antiguas que no tengan codigoProducto
    ERP.notificaciones.forEach(n => {
      if (!n.codigoProducto && n.producto) {
        n.codigoProducto = n.producto.split('—')[0].trim();
      }
    });

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
      // Actualizar badge de punto de reorden
      actualizarBadgeReorden();
      // Actualizar badge de notificaciones al cargar la página
      actualizarBadgeNotif();
    }, 100);

    activarNavItem();
  });