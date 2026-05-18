const ERP = {

  // ── Datos de clientes ──
  clientes: [
    {
      id: 'CLI-001', nombre: 'Distribuidora Torres S.A. de C.V.',
      rfc: 'DTS890312AB1', email: 'torres@distribuidora.mx',
      tel: '55 1234 5678', direccion: 'Av. Insurgentes Sur 1234', ciudad: 'Ciudad de México',
      estado_dir: 'CDMX', cp: '03810', pais: 'México', estado: 'activo',
      metodo_pago: 'Transferencia bancaria', banco: 'BBVA México', cuenta: '0411234567',
      clabe: '012180004112345678', cond_pago: '30 días neto', moneda: 'MXN',
      dir_envio: 'Av. Insurgentes Sur 1234, Piso 3', contacto_entrega: 'Luis Torres',
      tel_entrega: '55 9876 5432', horario_entrega: '09:00–18:00', obs_envio: 'Entrada por Acceso B',
      limite_credito: 500000, credito_utilizado: 185000
    },
    {
      id: 'CLI-002', nombre: 'Comercial Herrera y Asociados',
      rfc: 'CHA010203CD2', email: 'contacto@herreraasoc.com.mx',
      tel: '33 2345 6789', direccion: 'Calle Juárez 456', ciudad: 'Guadalajara',
      estado_dir: 'Jalisco', cp: '44100', pais: 'México', estado: 'pendiente',
      metodo_pago: 'Cheque', banco: 'Santander', cuenta: '9998887776',
      clabe: '014180099988877760', cond_pago: '15 días neto', moneda: 'MXN',
      dir_envio: 'Calle Juárez 456', contacto_entrega: 'María Herrera',
      tel_entrega: '33 1111 2222', horario_entrega: '08:00–17:00', obs_envio: '',
      limite_credito: 250000, credito_utilizado: 240000
    },
    {
      id: 'CLI-003', nombre: 'Industrial Martínez del Norte',
      rfc: 'IMN951107EF3', email: 'ventas@inmartinez.mx',
      tel: '81 3456 7890', direccion: 'Blvd. Kukulcán 789', ciudad: 'Monterrey',
      estado_dir: 'Nuevo León', cp: '64000', pais: 'México', estado: 'bloqueado',
      metodo_pago: 'Domiciliación', banco: 'Banamex', cuenta: '1122334455',
      clabe: '002180011223344550', cond_pago: '45 días neto', moneda: 'MXN',
      dir_envio: 'Blvd. Kukulcán 789 Bodega 3', contacto_entrega: 'Roberto Martínez',
      tel_entrega: '81 5555 6666', horario_entrega: '07:00–15:00', obs_envio: 'Solo lunes a viernes',
      limite_credito: 150000, credito_utilizado: 158000
    }
  ],

  // ── Catálogo de productos ──
  productos: [
  { codigo: 'PROD-001', descripcion: '1 Caja de Tornillos M6x20 Hexagonal Zinc, 1000pz',  precio: 850.00, stock: 125, rop: 25 },
  { codigo: 'PROD-002', descripcion: '1 Caja de Tuercas M6 DIN 934 Acero, 1000pz',         precio: 450.00, stock: 98,  rop: 18 },
  { codigo: 'PROD-003', descripcion: '1 Caja de Rondanas Planas M6 Galvanizada, 1000pz',   precio: 300.00, stock: 152, rop: 16 },
  { codigo: 'PROD-004', descripcion: '1 Caja de Pernos 1/2" x 2" Grado 5, 200pz',         precio: 640.00, stock: 45,  rop: 12 },
  { codigo: 'PROD-005', descripcion: '1 Caja de Clavos 2.5" x 9, 15 Cajas de 1kg',        precio: 720.00, stock: 30,  rop: 10 },
  { codigo: 'PROD-006', descripcion: '1 Caja de Remaches Pop 3/16" x 1/2", 800pz',        precio: 480.00, stock: 45,  rop: 9  },
],

  // ── Pedidos ──
  pedidos: [
    {
      folio: 'PED-2024-001', cliente_id: 'CLI-001', fecha: '2024-01-15',
      fecha_envio: '2024-01-22', estado: 'Empaquetado',
      productos: [
        { codigo: 'PROD-001', descripcion: '1 Caja de Tornillos M6x20 Hexagonal Zinc, 1000pz', cantidad: 5, precio: 850.00, total: 4250.00 },
        { codigo: 'PROD-002', descripcion: '1 Caja de Tuercas M6 DIN 934 Acero, 1000pz', cantidad: 5, precio: 450.00, total: 2250.00 }
      ],
      credito_aprobado: true
    },
    {
      folio: 'PED-2024-002', cliente_id: 'CLI-001', fecha: '2024-02-01',
      fecha_envio: '2024-02-10', estado: 'Validación cliente',
      productos: [
        { codigo: 'PROD-004', descripcion: '1 Caja de Pernos 1/2" x 2" Grado 5, 200pz', cantidad: 200, precio: 3.20, total: 640.00 }
      ],
      credito_aprobado: false
    }
  ],

  // ── Facturas ──
  facturas: [
    {
      folio: 'FAC-2024-001', folio_pedido: 'PED-2024-001', cliente_id: 'CLI-001',
      fecha: '2024-01-23', estado: 'Creada',
      conceptos: [
        { codigo: 'PROD-001', descripcion: '1 Caja de Tornillos M6x20 Hexagonal Zinc, 1000pz', cantidad: 5, precio: 850.00, total: 4250.00 },
        { codigo: 'PROD-002', descripcion: '1 Caja de Tuercas M6 DIN 934 Acero, 1000pz', cantidad: 5, precio: 450.00, total: 2250.00 }
      ],
      subtotal: 6500, iva: 1040, total: 7540
    }
  ],

  notificaciones: [],  // { id, tipo, estado, producto, cantidad, fechaProd, historia, cerrada }

  // ── Pedido activo en edición ──
  pedidoActivo: null,
  clienteActivo: null,
  facturaActiva: null,
  modoEdicion: false,

  // ── Usuario simulado ──
  usuario: { nombre: 'Ana González', rol: 'Ejecutivo de Ventas', iniciales: 'AG' }
};

/* PERSISTENCIA LOCAL */

function saveState() {
  try {
    localStorage.setItem('erp_nexus_data', JSON.stringify({
      clientes:       ERP.clientes,
      pedidos:        ERP.pedidos,
      facturas:       ERP.facturas,
      productos:      ERP.productos,
      notificaciones: ERP.notificaciones
    }));
  } catch(e) {}
}

function loadState() {
  try {
    const d = localStorage.getItem('erp_nexus_data');
    if (d) {
      const parsed = JSON.parse(d);
      if (parsed.clientes)       ERP.clientes       = parsed.clientes;
      if (parsed.pedidos)        ERP.pedidos        = parsed.pedidos;
      if (parsed.facturas)       ERP.facturas       = parsed.facturas;
      if (parsed.productos)      ERP.productos      = parsed.productos;
      if (parsed.notificaciones) ERP.notificaciones = parsed.notificaciones;
    }
  } catch(e) {}
}

// ── Helpers ──
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function fmt(n) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(n || 0);
}

function fmtDate(d) {
  if (!d) return '—';
  const [y,m,dd] = d.split('-');
  return `${dd}/${m}/${y}`;
}

function today() {
  return new Date().toISOString().slice(0,10);
}

function genFolio(prefix, list, field) {
  const year = new Date().getFullYear();
  const nums = list
    .map(x => {
      const val = x[field] || '';
      // Tomar solo la última parte después del último guión
      const parts = val.split('-');
      return parseInt(parts[parts.length - 1], 10);
    })
    .filter(n => !isNaN(n));
  const next = nums.length ? Math.max(...nums) + 1 : 1;
  return `${prefix}-${year}-${String(next).padStart(3, '0')}`;
}

/* SISTEMA DE MODALES */

function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('show'); document.body.style.overflow = 'hidden'; }
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('show'); document.body.style.overflow = ''; }
}

// Cierra modal al hacer clic fuera del box
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('show');
    document.body.style.overflow = '';
  }
});

// Tecla ESC cierra todos los modales
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    $$('.modal-overlay.show').forEach(m => {
      m.classList.remove('show');
      document.body.style.overflow = '';
    });
  }
});

/* SISTEMA DE TABS */

function initTabs() {
  $$('[data-tab-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('[data-tab-group]') || btn.closest('.erp-tabs')?.parentElement;
      const target = btn.dataset.tabTarget;

      // Desactivar todos los tabs del grupo
      $$('[data-tab-target]', group).forEach(b => b.classList.remove('active'));
      $$('.tab-content', group).forEach(c => c.classList.remove('active'));

      // Activar el seleccionado
      btn.classList.add('active');
      const content = document.getElementById(target);
      if (content) content.classList.add('active');
    });
  });
}

/* BADGES DE ESTADO */

const ESTADO_BADGE = {
  'activo':               'badge-activo',
  'pendiente':            'badge-pendiente',
  'bloqueado':            'badge-bloqueado',
  'Validación cliente':   'badge-validacion-cliente',
  'Validación crédito':   'badge-validacion-credito',
  'Confirmar pedido':     'badge-confirmar-pedido',
  'Recibido':             'badge-recibido',
  'Empaquetado':          'badge-empaquetado',
  'Enviado':              'badge-enviado',
  'Facturado':            'badge-facturado',
  'Creada':               'badge-creada',
  'Cancelada':            'badge-bloqueado',
};

function badgeHTML(estado) {
  const cls = ESTADO_BADGE[estado] || 'badge-neutral';
  return `<span class="badge ${cls}">${estado}</span>`;
}

/* MÓDULO: CLIENTES */

/** Renderiza tabla de clientes */
function renderTablaClientes() {
  const tbody = document.getElementById('clientes-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  ERP.clientes.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="fw-semibold" style="color:var(--primary-mid)">${c.id}</span></td>
      <td>${c.nombre}</td>
      <td>${c.rfc}</td>
      <td>${c.ciudad}, ${c.estado_dir}</td>
      <td>${c.email}</td>
      <td>${badgeHTML(c.estado)}</td>
      <td>
        <div class="d-flex gap-2">
          <button class="btn btn-secondary btn-sm" onclick="editarCliente('${c.id}')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Editar
          </button>
          <button class="btn btn-danger btn-sm" onclick="confirmarEliminarCliente('${c.id}')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/** Abre formulario para nuevo cliente */
function nuevoCliente() {
  ERP.clienteActivo = null;
  ERP.modoEdicion = false;
  limpiarFormCliente();
  // Redirigir a clientes.html si no estamos ahí
  if (!document.getElementById('form-cliente')) {
    window.location.href = 'clientes.html?mode=new';
    return;
  }
  resetearFormCliente();
  actualizarTituloFormCliente('Nuevo Cliente');
}

/** Carga cliente para edición */
function editarCliente(id) {
  const c = ERP.clientes.find(x => x.id === id);
  if (!c) return;
  ERP.clienteActivo = c;
  ERP.modoEdicion = true;

  if (!document.getElementById('form-cliente')) {
    sessionStorage.setItem('erp_cliente_editar', id);
    window.location.href = 'clientes.html';
    return;
  }

  llenarFormCliente(c);
  actualizarTituloFormCliente('Editar Cliente: ' + c.nombre);
}

function llenarFormCliente(c) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  set('cli-id',        c.id);
  set('cli-nombre',    c.nombre);
  set('cli-rfc',       c.rfc);
  set('cli-email',     c.email);
  set('cli-tel',       c.tel);
  set('cli-direccion', c.direccion);
  set('cli-ciudad',    c.ciudad);
  set('cli-estado-dir',c.estado_dir);
  set('cli-cp',        c.cp);
  set('cli-pais',      c.pais);
  set('cli-metodo',    c.metodo_pago);
  set('cli-banco',     c.banco);
  set('cli-cuenta',    c.cuenta);
  set('cli-clabe',     c.clabe);
  set('cli-condpago',  c.cond_pago);
  set('cli-moneda',    c.moneda);
  set('cli-dir-envio', c.dir_envio);
  set('cli-contacto-envio', c.contacto_entrega);
  set('cli-tel-envio', c.tel_entrega);
  set('cli-horario',   c.horario_entrega);
  set('cli-obs',       c.obs_envio);
  set('cli-limite-credito', c.limite_credito);

  actualizarBadgeEstadoCliente(c.estado);

  // Seleccionar estado en el selector si existe
  const selEstado = document.getElementById('cli-estado-select');
  if (selEstado) selEstado.value = c.estado || 'pendiente';
}

function limpiarFormCliente() {
  $$('#form-cliente input, #form-cliente select, #form-cliente textarea').forEach(el => { el.value = ''; });
  const idEl = document.getElementById('cli-id');
  if (idEl) idEl.value = genFolio('CLI', ERP.clientes, 'id');
  const limiteEl = document.getElementById('cli-limite-credito');
  if (limiteEl) limiteEl.value = '100000';
  actualizarBadgeEstadoCliente('pendiente');
  const selEstado = document.getElementById('cli-estado-select');
  if (selEstado) selEstado.value = 'pendiente';
}

function resetearFormCliente() {
  limpiarFormCliente();
  const idEl = document.getElementById('cli-id');
  if (idEl) idEl.value = genFolio('CLI', ERP.clientes, 'id');
}

function actualizarBadgeEstadoCliente(estado) {
  const el = document.getElementById('cli-estado-badge');
  const el2 = document.getElementById('cli-estado');
  const sel = document.getElementById('cli-estado-select');
  if (el) el.innerHTML = badgeHTML(estado);
  if (el2) el2.value = estado;
  if (sel) sel.value = estado;
}

function actualizarTituloFormCliente(txt) {
  const el = document.getElementById('form-cliente-titulo');
  if (el) el.textContent = txt;
}

/** Guarda cliente */
function guardarCliente() {
  const form = document.getElementById('form-cliente');
  if (!form) return;

  // Validación simple
  let valido = true;
  $$('input[required], select[required]', form).forEach(el => {
    if (!el.value.trim()) {
      el.classList.add('is-invalid');
      valido = false;
    } else {
      el.classList.remove('is-invalid');
    }
  });

  if (!valido) {
    mostrarToast('Completa los campos obligatorios', 'warning');
    return;
  }

  // Sincronizar el campo oculto desde el selector de estado
  const selEstado = document.getElementById('cli-estado-select');
  const hiddenEstado = document.getElementById('cli-estado');
  if (selEstado && hiddenEstado) hiddenEstado.value = selEstado.value;

  const g = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };

  const datos = {
    id:               g('cli-id') || genFolio('CLI', ERP.clientes, 'id'),
    nombre:           g('cli-nombre'),
    rfc:              g('cli-rfc'),
    email:            g('cli-email'),
    tel:              g('cli-tel'),
    direccion:        g('cli-direccion'),
    ciudad:           g('cli-ciudad'),
    estado_dir:       g('cli-estado-dir'),
    cp:               g('cli-cp'),
    pais:             g('cli-pais'),
    estado:           g('cli-estado') || (ERP.clienteActivo ? ERP.clienteActivo.estado : 'pendiente'),
    metodo_pago:      g('cli-metodo'),
    banco:            g('cli-banco'),
    cuenta:           g('cli-cuenta'),
    clabe:            g('cli-clabe'),
    cond_pago:        g('cli-condpago'),
    moneda:           g('cli-moneda') || 'MXN',
    dir_envio:        g('cli-dir-envio'),
    contacto_entrega: g('cli-contacto-envio'),
    tel_entrega:      g('cli-tel-envio'),
    horario_entrega:  g('cli-horario'),
    obs_envio:        g('cli-obs'),
    limite_credito:   parseFloat(g('cli-limite-credito')) || ERP.clienteActivo?.limite_credito || 100000,
    credito_utilizado:ERP.clienteActivo?.credito_utilizado || 0
  };

  if (ERP.modoEdicion && ERP.clienteActivo) {
    const idx = ERP.clientes.findIndex(c => c.id === ERP.clienteActivo.id);
    if (idx >= 0) ERP.clientes[idx] = { ...ERP.clientes[idx], ...datos };
  } else {
    ERP.clientes.push(datos);
  }

  saveState();
  mostrarToast('Cliente guardado exitosamente', 'success');
  renderTablaClientes();

  // Si hay lista visible
  const cont = document.getElementById('clientes-container');
  if (cont) cont.style.display = '';
  const formCont = document.getElementById('form-container');
  if (formCont) formCont.style.display = 'none';
}

/* MÓDULO: PEDIDOS  */

let productosLineas = []; // Líneas de producto en el formulario activo

/** Renderiza tabla de pedidos */
function renderTablaPedidos() {
  const tbody = document.getElementById('pedidos-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  ERP.pedidos.forEach(p => {
    const cli = ERP.clientes.find(c => c.id === p.cliente_id);
    const total = p.productos.reduce((s, x) => s + x.total, 0);
    const esFacturado   = p.estado === 'Facturado';
    const esEmpaquetado = p.estado === 'Empaquetado';
    const bloqueado     = esFacturado || esEmpaquetado;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="fw-semibold" style="color:var(--primary-mid)">${p.folio}</span></td>
      <td>${cli ? cli.nombre : p.cliente_id}</td>
      <td>${fmtDate(p.fecha)}</td>
      <td>${fmtDate(p.fecha_envio)}</td>
      <td>${badgeHTML(p.estado)}</td>
      <td class="fw-semibold">${fmt(total)}</td>
      <td>
        <div class="d-flex gap-2">
          <button class="btn btn-secondary btn-sm" onclick="abrirModalVerPedido('${p.folio}')">Ver</button>
          ${bloqueado
            ? `<button class="btn btn-sm" disabled title="Pedido ${esFacturado ? 'facturado' : 'empaquetado'} — no editable" style="background:#e5e7eb; color:#9ca3af; cursor:not-allowed">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                 ${esFacturado ? 'Facturado' : 'Empaquetado'}
               </button>`
            : `<button class="btn btn-sm" onclick="editarPedido('${p.folio}')" style="background:#ffde5c; color:var(--neutral-700)">Editar</button>`
          }
          <button class="btn btn-danger btn-sm" onclick="confirmarEliminarPedido('${p.folio}')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/** Muestra modal de confirmación para eliminar pedido */
function confirmarEliminarPedido(folio) {
  const p = ERP.pedidos.find(x => x.folio === folio);
  if (!p) return;

  // Bloquear eliminación si el pedido está facturado
  if (p.estado === 'Facturado') {
    mostrarToast('No se puede eliminar un pedido facturado', 'warning');
    return;
  }

  const modal = document.getElementById('modal-eliminar-pedido');
  if (modal) {
    document.getElementById('eliminar-ped-folio').textContent  = p.folio;
    document.getElementById('eliminar-ped-estado').innerHTML   = badgeHTML(p.estado);
    const cli = ERP.clientes.find(c => c.id === p.cliente_id);
    document.getElementById('eliminar-ped-cliente').textContent = cli ? cli.nombre : p.cliente_id;
    modal.dataset.folio = folio;
    openModal('modal-eliminar-pedido');
  }
}

/** Elimina el pedido confirmado */
function eliminarPedido() {
  const modal = document.getElementById('modal-eliminar-pedido');
  if (!modal) return;
  const folio = modal.dataset.folio;
  const idx = ERP.pedidos.findIndex(p => p.folio === folio);
  if (idx >= 0) {
    ERP.pedidos.splice(idx, 1);
    saveState();
    renderTablaPedidos();
    mostrarToast(`Pedido ${folio} eliminado`, 'success');
  }
  closeModal('modal-eliminar-pedido');
}

/** Inicializa formulario de nuevo pedido */
function nuevoPedido() {
  ERP.pedidoActivo = null;
  ERP.modoEdicion = false;
  productosLineas = [{ codigo:'', descripcion:'', cantidad:1, precio:0, total:0 }];

  const folioEl = document.getElementById('ped-folio');
  if (folioEl) folioEl.value = genFolio('PED', ERP.pedidos, 'folio');

  const fechaEl = document.getElementById('ped-fecha');
  if (fechaEl) fechaEl.value = today();

  const estadoEl = document.getElementById('ped-estado');
  if (estadoEl) estadoEl.value = 'Nuevo';

  const estadoBadge = document.getElementById('ped-estado-badge');
  if (estadoBadge) estadoBadge.innerHTML = badgeHTML('Nuevo');

  renderProductosTable();
  actualizarBotonesCredito(false);
}

/** Carga pedido para edición/visualización */
function editarPedido(folio) {
  const p = ERP.pedidos.find(x => x.folio === folio);
  if (!p) return;

  // Bloquear edición si ya está facturado o empaquetado
  if (p.estado === 'Facturado') {
    mostrarToast('No se puede editar un pedido ya facturado', 'warning');
    return;
  }
  if (p.estado === 'Empaquetado') {
    mostrarToast('No se puede editar un pedido ya empaquetado', 'warning');
    return;
  }

  ERP.pedidoActivo = p;
  ERP.modoEdicion = true;

  if (!document.getElementById('ped-folio')) {
    sessionStorage.setItem('erp_pedido_editar', folio);
    window.location.href = 'pedidos.html';
    return;
  }

  llenarFormPedido(p);
}

function verPedido(folio) { editarPedido(folio); }

function llenarFormPedido(p) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  set('ped-folio',      p.folio);
  set('ped-cliente',    p.cliente_id);
  set('ped-fecha',      p.fecha);
  set('ped-fecha-envio',p.fecha_envio);
  set('ped-estado',     p.estado);

  const badge = document.getElementById('ped-estado-badge');
  if (badge) badge.innerHTML = badgeHTML(p.estado);

  productosLineas = p.productos.map(x => ({ ...x }));
  renderProductosTable();
  actualizarBotonesCredito(p.credito_aprobado);

  // Mostrar botones según estado
  actualizarUISegunEstadoPedido(p.estado);
}

function actualizarUISegunEstadoPedido(estado) {
  const btnCredito    = document.getElementById('btn-autorizar-credito');
  const btnStock      = document.getElementById('btn-consultar-stock');
  const btnConfirmar  = document.getElementById('btn-confirmar-pedido');
  const btnEmpaquetar = document.getElementById('btn-empaquetar');
  const btnGuardar    = document.getElementById('btn-guardar-pedido');

  const ESTADOS = ['Validación cliente','Validación crédito','Confirmar pedido','Recibido','Empaquetado'];

  if (btnCredito)    btnCredito.disabled   = !ESTADOS.includes(estado) || estado === 'Nuevo';
  if (btnStock)      btnStock.disabled     = !['Validación crédito','Confirmar pedido','Recibido','Empaquetado'].includes(estado);
  if (btnConfirmar)  btnConfirmar.disabled = !['Validación crédito'].includes(estado);
  // Empaquetar: disponible desde Recibido (antes llamado así) o Confirmar pedido
  if (btnEmpaquetar) btnEmpaquetar.disabled= !['Confirmar pedido','Recibido','Empaquetado'].includes(estado);

  // Si ya está facturado, bloquear toda edición del formulario
  if (estado === 'Facturado') {
    ['pedido-form-container', 'form-pedido'].forEach(formId => {
      const formEl = document.getElementById(formId);
      if (formEl) {
        formEl.querySelectorAll('input, select, textarea').forEach(el => {
          el.disabled = true;
        });
      }
    });
    if (btnGuardar)    btnGuardar.style.display    = 'none';
    if (btnEmpaquetar) btnEmpaquetar.style.display  = 'none';
    if (btnConfirmar)  btnConfirmar.style.display   = 'none';
    if (btnCredito)    btnCredito.style.display     = 'none';
    if (btnStock)      btnStock.style.display       = 'none';
  }
}

function actualizarBotonesCredito(creditoAprobado) {
  const btn = document.getElementById('btn-autorizar-credito');
  if (btn) btn.disabled = !creditoAprobado && (ERP.pedidoActivo?.estado === undefined || ERP.pedidoActivo?.estado === 'Nuevo');
}

/** Agrega línea de producto a la tabla */
function agregarProducto() {
  productosLineas.push({ codigo:'', descripcion:'', cantidad:1, precio:0, total:0 });
  renderProductosTable();
}

/** Elimina línea de producto */
function eliminarProducto(idx) {
  productosLineas.splice(idx, 1);
  renderProductosTable();
}

/** Autocompleta producto por código */
function autocompletarProducto(idx) {
  const codigoEl = document.getElementById(`prod-codigo-${idx}`);
  if (!codigoEl) return;
  const prod = ERP.productos.find(p => p.codigo === codigoEl.value);
  if (!prod) return;

  const descEl  = document.getElementById(`prod-desc-${idx}`);
  const precioEl= document.getElementById(`prod-precio-${idx}`);
  if (descEl)   descEl.value  = prod.descripcion;
  if (precioEl) precioEl.value = prod.precio;
  calcularTotal(idx);
}

/** Calcula total de línea */
function calcularTotal(idx) {
  const qty        = parseFloat(document.getElementById(`prod-qty-${idx}`)?.value   || 0);
  const price      = parseFloat(document.getElementById(`prod-precio-${idx}`)?.value || 0);
  const total      = qty * price;
  const sinIvaEl   = document.getElementById(`prod-sin-iva-${idx}`);
  const totalEl    = document.getElementById(`prod-total-${idx}`);

  if (sinIvaEl) sinIvaEl.textContent = fmt(price / 1.16);
  if (totalEl)  totalEl.textContent  = fmt(total);

  productosLineas[idx] = {
    codigo:      document.getElementById(`prod-codigo-${idx}`)?.value || '',
    descripcion: document.getElementById(`prod-desc-${idx}`)?.value   || '',
    cantidad:    qty,
    precio:      price,
    total:       total
  };
  actualizarTotalPedido();
}

/** Actualiza total general del pedido */
function actualizarTotalPedido() {
  const gran = productosLineas.reduce((s, p) => s + (p.total || 0), 0);
  const el = document.getElementById('ped-total');
  if (el) el.textContent = fmt(gran);
}

/** Renderiza tabla de productos editable */
function renderProductosTable() {
  const tbody = document.getElementById('productos-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  productosLineas.forEach((p, idx) => {
    const optsHTML = ERP.productos.map(pr =>
      `<option value="${pr.codigo}" ${pr.codigo === p.codigo ? 'selected' : ''}>${pr.codigo}</option>`
    ).join('');

    const precioConIva = p.precio || 0;
    const precioSinIva = precioConIva / 1.16;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <select id="prod-codigo-${idx}" class="table-input" onchange="autocompletarProducto(${idx})" style="min-width:120px">
          <option value="">-- Seleccionar --</option>
          ${optsHTML}
        </select>
      </td>
      <td><input id="prod-desc-${idx}" class="table-input" value="${p.descripcion}" placeholder="Descripción" style="min-width:200px"></td>
      <td><input id="prod-qty-${idx}" class="table-input" type="number" min="1" value="${p.cantidad}" style="width:70px" oninput="calcularTotal(${idx})"></td>
      <td style="text-align:right; color:var(--neutral-500); font-size:.82rem" id="prod-sin-iva-${idx}">${fmt(precioSinIva)}</td>
      <td><input id="prod-precio-${idx}" class="table-input" type="number" step="0.01" value="${precioConIva}" style="width:100px" oninput="calcularTotal(${idx})"></td>
      <td id="prod-total-${idx}" class="fw-semibold" style="text-align:right">${fmt(p.total)}</td>
      <td>
        <button class="btn btn-danger btn-icon btn-sm" onclick="eliminarProducto(${idx})">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  actualizarTotalPedido();
}

/** Acción: Guardar pedido — muestra modal de confirmación */
function guardarPedido() {
  const folio   = document.getElementById('ped-folio')?.value;
  const cliente = document.getElementById('ped-cliente')?.value;
  const fecha   = document.getElementById('ped-fecha')?.value;
  const fechaEnv= document.getElementById('ped-fecha-envio')?.value;

  if (!folio || !cliente || !fecha) {
    mostrarToast('Completa los campos obligatorios del pedido', 'warning');
    return;
  }

  if (productosLineas.length === 0 || !productosLineas.some(p => p.codigo)) {
    mostrarToast('Agrega al menos un producto', 'warning');
    return;
  }

  openModal('modal-confirmar-pedido');
}

/** Confirmación del modal: guarda pedido y cambia estado */
function confirmarGuardarPedido() {
  closeModal('modal-confirmar-pedido');

  const folio    = document.getElementById('ped-folio')?.value;
  const clienteId= document.getElementById('ped-cliente')?.value;
  const fecha    = document.getElementById('ped-fecha')?.value;
  const fechaEnv = document.getElementById('ped-fecha-envio')?.value;

  // Sync líneas actuales
  productosLineas.forEach((p, idx) => {
    const qty   = parseFloat(document.getElementById(`prod-qty-${idx}`)?.value   || 0);
    const price = parseFloat(document.getElementById(`prod-precio-${idx}`)?.value || 0);
    productosLineas[idx] = {
      codigo:      document.getElementById(`prod-codigo-${idx}`)?.value || p.codigo,
      descripcion: document.getElementById(`prod-desc-${idx}`)?.value   || p.descripcion,
      cantidad:    qty, precio: price, total: qty * price
    };
  });

  const nuevoEstado = 'Validación cliente';

  const pedido = {
    folio, cliente_id: clienteId, fecha, fecha_envio: fechaEnv,
    estado: nuevoEstado,
    productos: productosLineas.filter(p => p.codigo),
    credito_aprobado: false
  };

  if (ERP.modoEdicion && ERP.pedidoActivo) {
    const idx = ERP.pedidos.findIndex(p => p.folio === ERP.pedidoActivo.folio);
    if (idx >= 0) ERP.pedidos[idx] = { ...ERP.pedidos[idx], ...pedido };
  } else {
    ERP.pedidos.push(pedido);
  }

  ERP.pedidoActivo = pedido;
  ERP.modoEdicion = true;
  saveState();

  // Actualizar badge de estado
  const badge = document.getElementById('ped-estado-badge');
  if (badge) badge.innerHTML = badgeHTML(nuevoEstado);
  const estadoEl = document.getElementById('ped-estado');
  if (estadoEl) estadoEl.value = nuevoEstado;

  // Activar botón de crédito
  const btnCredito = document.getElementById('btn-autorizar-credito');
  if (btnCredito) btnCredito.disabled = false;

  actualizarUISegunEstadoPedido(nuevoEstado);
  renderTablaPedidos();
  mostrarToast('Pedido guardado — Estado: Validación cliente', 'success');
}

/* MÓDULO: VALIDACIÓN DE CRÉDITO  */

function renderCreditoCliente() {
  // Carga datos de crédito del cliente seleccionado en el pedido activo
  const pedido = ERP.pedidoActivo;
  if (!pedido) return;

  const cliente = ERP.clientes.find(c => c.id === pedido.cliente_id);
  if (!cliente) return;

  const disponible = cliente.limite_credito - cliente.credito_utilizado;
  const pct = Math.min((cliente.credito_utilizado / cliente.limite_credito) * 100, 100);
  const claseBarra = pct < 60 ? 'safe' : pct < 85 ? 'medium' : 'danger';

  // Rellenar campos
  setVal('cred-cliente',     cliente.nombre);
  setVal('cred-folio',       pedido.folio);
  setVal('cred-estado',      pedido.estado);
  setVal('cred-limite',      fmt(cliente.limite_credito));
  setVal('cred-utilizado',   fmt(cliente.credito_utilizado));
  setVal('cred-disponible',  fmt(disponible));

  const badge = document.getElementById('cred-estado-badge');
  if (badge) badge.innerHTML = badgeHTML(pedido.estado);

  const barra = document.getElementById('credit-bar');
  if (barra) { barra.style.width = pct + '%'; barra.className = `credit-bar ${claseBarra}`; }

  const pctEl = document.getElementById('credit-pct');
  if (pctEl) pctEl.textContent = pct.toFixed(0) + '%';

  const alerta = document.getElementById('cred-alerta');
  if (alerta) {
    if (disponible < 0) {
      alerta.className = 'alert alert-danger';
      alerta.innerHTML = '⚠️ <strong>Crédito excedido.</strong> El cliente ha superado su límite de crédito. Requiere autorización especial.';
      alerta.style.display = 'flex';
    } else if (pct > 85) {
      alerta.className = 'alert alert-warning';
      alerta.innerHTML = '⚠️ <strong>Crédito al límite.</strong> El cliente usa más del 85% de su crédito disponible.';
      alerta.style.display = 'flex';
    } else {
      alerta.style.display = 'none';
    }
  }
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = val;
    else el.textContent = val;
  }
}

function guardarValidacionCredito() {
  openModal('modal-confirmar-credito');
}

function confirmarValidacionCredito() {
  closeModal('modal-confirmar-credito');

  if (!ERP.pedidoActivo) return;

  const idx = ERP.pedidos.findIndex(p => p.folio === ERP.pedidoActivo.folio);
  if (idx >= 0) {
    ERP.pedidos[idx].estado = 'Validación crédito';
    ERP.pedidos[idx].credito_aprobado = true;
    ERP.pedidoActivo = ERP.pedidos[idx];
  }

  saveState();

  const badge = document.getElementById('cred-estado-badge');
  if (badge) badge.innerHTML = badgeHTML('Validación crédito');

  const btnStock = document.getElementById('btn-consultar-stock');
  if (btnStock) btnStock.disabled = false;

  renderTablaPedidos();
  mostrarToast('Crédito validado — Estado: Validación crédito', 'success');
}

/* MÓDULO: CONSULTA DE STOCK */

function consultarStock() {
  if (!ERP.pedidoActivo) return;

  const tbody = document.getElementById('stock-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';

  ERP.pedidoActivo.productos.forEach(p => {
    const prod = ERP.productos.find(x => x.codigo === p.codigo);
    const existencia = prod ? prod.stock : 0;
    const suficiente = existencia >= p.cantidad;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.codigo}</td>
      <td>${p.descripcion}</td>
      <td>${p.cantidad.toLocaleString()}</td>
      <td>${existencia.toLocaleString()}</td>
      <td>${suficiente
        ? '<span class="badge badge-activo">Sí</span>'
        : '<span class="badge badge-bloqueado">No</span>'}</td>
    `;
    tbody.appendChild(tr);
  });

  const seccion = document.getElementById('seccion-stock');
  if (seccion) { seccion.style.display = ''; seccion.classList.add('fade-in'); }

  const btnConfirmar = document.getElementById('btn-confirmar-pedido');
  if (btnConfirmar) btnConfirmar.disabled = false;
}

function confirmarPedido() {
  if (!ERP.pedidoActivo) return;

  const idx = ERP.pedidos.findIndex(p => p.folio === ERP.pedidoActivo.folio);
  if (idx >= 0) {
    ERP.pedidos[idx].estado = 'Confirmar pedido';
    ERP.pedidoActivo = ERP.pedidos[idx];
  }

  saveState();

  const badge = document.getElementById('cred-estado-badge');
  if (badge) badge.innerHTML = badgeHTML('Confirmar pedido');

  const btnEmp = document.getElementById('btn-empaquetar');
  if (btnEmp) btnEmp.disabled = false;

  renderTablaPedidos();
  mostrarToast('Pedido confirmado — Listo para empaquetar', 'success');
}

function empaquetar() {
  if (!ERP.pedidoActivo) return;

  const idx = ERP.pedidos.findIndex(p => p.folio === ERP.pedidoActivo.folio);
  if (idx >= 0) {
    const pedido = ERP.pedidos[idx];
    // Solo restar stock si aún no está empaquetado (evitar doble descuento)
    if (pedido.estado !== 'Empaquetado') {
      pedido.productos.forEach(linea => {
        const prod = ERP.productos.find(p => p.codigo === linea.codigo);
        if (prod) {
          prod.stock = Math.max(0, prod.stock - linea.cantidad);
        }
      });
    }
    ERP.pedidos[idx].estado = 'Empaquetado';
    ERP.pedidoActivo = ERP.pedidos[idx];
  }

  saveState();

  const badge = document.getElementById('cred-estado-badge');
  if (badge) badge.innerHTML = badgeHTML('Empaquetado');

  // Actualizar badge en el formulario de pedido si existe
  const pedBadge = document.getElementById('ped-estado-badge');
  if (pedBadge) pedBadge.innerHTML = badgeHTML('Empaquetado');

  // Actualizar badge de punto de reorden en el sidebar
  if (typeof actualizarBadgeReorden === 'function') actualizarBadgeReorden();

  renderTablaPedidos();
  mostrarToast('Pedido empaquetado — Stock actualizado', 'success');
  openModal('modal-pedido-listo');
}

/* MÓDULO: FACTURA */

function renderTablaFacturas() {
  const tbody = document.getElementById('facturas-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  ERP.facturas.forEach(f => {
    const cli = ERP.clientes.find(c => c.id === f.cliente_id);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="fw-semibold" style="color:var(--primary-mid)">${f.folio}</span></td>
      <td>${f.folio_pedido}</td>
      <td>${cli ? cli.nombre : f.cliente_id}</td>
      <td>${fmtDate(f.fecha)}</td>
      <td>${badgeHTML(f.estado)}</td>
      <td class="fw-semibold">${fmt(f.total)}</td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="verFactura('${f.folio}')">Ver</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/** Carga pedidos con estado "Empaquetado" o "Recibido" en el selector de nueva factura */
function cargarPedidosParaFactura() {
  const sel = document.getElementById('fac-pedido');
  if (!sel) return;
  sel.innerHTML = '<option value="">-- Seleccionar pedido --</option>';
  ERP.pedidos
    .filter(p => p.estado === 'Empaquetado' || p.estado === 'Recibido')
    .forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.folio;
      opt.textContent = `${p.folio} — ${ERP.clientes.find(c=>c.id===p.cliente_id)?.nombre || p.cliente_id}`;
      sel.appendChild(opt);
    });
}

function autocargarFactura() {
  const sel = document.getElementById('fac-pedido');
  if (!sel || !sel.value) return;

  const pedido = ERP.pedidos.find(p => p.folio === sel.value);
  if (!pedido) return;

  const cliente = ERP.clientes.find(c => c.id === pedido.cliente_id);

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  set('fac-folio',   genFolio('FAC', ERP.facturas, 'folio'));
  set('fac-cliente', cliente ? cliente.nombre : pedido.cliente_id);
  set('fac-fecha',   today());
  set('fac-estado',  'Creada');

  const badge = document.getElementById('fac-estado-badge');
  if (badge) badge.innerHTML = badgeHTML('Creada');

  // Tabla de conceptos
  const tbody = document.getElementById('conceptos-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    pedido.productos.forEach(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${p.codigo}</td>
        <td>${p.descripcion}</td>
        <td>${p.cantidad.toLocaleString()}</td>
        <td>${fmt(p.precio)}</td>
        <td class="fw-semibold">${fmt(p.total)}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Totales
  const subtotal = pedido.productos.reduce((s, p) => s + p.total, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  setVal('fac-subtotal', fmt(subtotal));
  setVal('fac-iva',      fmt(iva));
  setVal('fac-total',    fmt(total));

  ERP.facturaActiva = {
    pedido, cliente, subtotal, iva, total,
    folio_pedido: pedido.folio, cliente_id: pedido.cliente_id
  };
}

function guardarFactura() {
  if (!ERP.facturaActiva) {
    mostrarToast('Selecciona un pedido para facturar', 'warning');
    return;
  }
  openModal('modal-confirmar-factura');
}

function confirmarGuardarFactura() {
  closeModal('modal-confirmar-factura');

  const fa = ERP.facturaActiva;
  if (!fa) return;

  const nuevoFolio = document.getElementById('fac-folio')?.value || genFolio('FAC', ERP.facturas, 'folio');

  const factura = {
    folio:       nuevoFolio,
    folio_pedido:fa.folio_pedido,
    cliente_id:  fa.cliente_id,
    fecha:       today(),
    estado:      'Creada',
    conceptos:   fa.pedido.productos,
    subtotal:    fa.subtotal,
    iva:         fa.iva,
    total:       fa.total
  };

  ERP.facturas.push(factura);

  // Actualizar estado del pedido a Facturado
  const idxP = ERP.pedidos.findIndex(p => p.folio === fa.folio_pedido);
  if (idxP >= 0) ERP.pedidos[idxP].estado = 'Facturado';

  // Fix 4: Restar el total de la factura al crédito utilizado del cliente (solo una vez)
  const idxC = ERP.clientes.findIndex(c => c.id === fa.cliente_id);
  if (idxC >= 0 && !factura.credito_descontado) {
    ERP.clientes[idxC].credito_utilizado = Math.max(0, (ERP.clientes[idxC].credito_utilizado || 0) - fa.total);
    factura.credito_descontado = true;
    // Actualizar la factura recién insertada con el flag
    ERP.facturas[ERP.facturas.length - 1].credito_descontado = true;
  }

  saveState();
  renderTablaFacturas();
  mostrarToast('Factura creada exitosamente', 'success');
  openModal('modal-factura-creada');
}

function verFactura(folio) {
  const f = ERP.facturas.find(x => x.folio === folio);
  if (!f) return;
  const cli = ERP.clientes.find(c => c.id === f.cliente_id);

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  set('fac-folio',   f.folio);
  set('fac-cliente', cli ? cli.nombre : f.cliente_id);
  set('fac-fecha',   f.fecha);
  set('fac-estado',  f.estado);

  const badge = document.getElementById('fac-estado-badge');
  if (badge) badge.innerHTML = badgeHTML(f.estado);

  const tbody = document.getElementById('conceptos-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    (f.conceptos || []).forEach(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${p.codigo}</td>
        <td>${p.descripcion}</td>
        <td>${p.cantidad.toLocaleString()}</td>
        <td>${fmt(p.precio)}</td>
        <td class="fw-semibold">${fmt(p.total)}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  setVal('fac-subtotal', fmt(f.subtotal));
  setVal('fac-iva',      fmt(f.iva));
  setVal('fac-total',    fmt(f.total));

  // Sel pedido
  const selPed = document.getElementById('fac-pedido');
  if (selPed) {
    // Añadir opción si no existe
    if (![...selPed.options].some(o => o.value === f.folio_pedido)) {
      const opt = document.createElement('option');
      opt.value = f.folio_pedido;
      opt.textContent = f.folio_pedido;
      selPed.appendChild(opt);
    }
    selPed.value = f.folio_pedido;
  }
}

/* TOAST NOTIFICATIONS */

function mostrarToast(msg, tipo = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = `
      position:fixed; bottom:24px; right:24px; z-index:3000;
      display:flex; flex-direction:column; gap:8px; max-width:340px;
    `;
    document.body.appendChild(container);
  }

  const icons = { success:'✓', warning:'⚠', info:'ℹ', danger:'✕' };
  const colors = {
    success: 'var(--success)', warning: 'var(--warning)',
    info: 'var(--primary-mid)', danger: 'var(--danger)'
  };

  const toast = document.createElement('div');
  toast.style.cssText = `
    display:flex; align-items:center; gap:12px;
    background:#fff; border-radius:10px;
    padding:14px 18px;
    box-shadow:0 8px 30px rgba(0,0,0,.15);
    border-left:4px solid ${colors[tipo]};
    animation:fadeIn .3s ease;
    font-family:'DM Sans',sans-serif;
    font-size:.875rem; color:var(--neutral-800);
    min-width:260px;
  `;
  toast.innerHTML = `
    <span style="font-size:16px; color:${colors[tipo]}; font-weight:800">${icons[tipo]}</span>
    <span>${msg}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all .3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* NAVEGACIÓN SIDEBAR */

function activarNavItem() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $$('.sidebar-nav li a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

function toggleSidebar() {
  const sidebar = document.querySelector('.erp-sidebar');
  if (sidebar) sidebar.classList.toggle('open');
}

/* INICIALIZACIÓN */

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initTabs();
  activarNavItem();

  // Renderizar tablas si existen en la página
  renderTablaClientes();
  renderTablaPedidos();
  renderTablaFacturas();

  // Módulo clientes: cargar si hay edición pendiente
  const clienteEditar = sessionStorage.getItem('erp_cliente_editar');
  if (clienteEditar) {
    sessionStorage.removeItem('erp_cliente_editar');
    const c = ERP.clientes.find(x => x.id === clienteEditar);
    if (c) editarCliente(c.id);
  }

  // Módulo pedidos: cargar si hay edición pendiente
  const pedidoEditar = sessionStorage.getItem('erp_pedido_editar');
  if (pedidoEditar) {
    sessionStorage.removeItem('erp_pedido_editar');
    editarPedido(pedidoEditar);
  }

  // Inicializar formularios en sus páginas
  const page = window.location.pathname.split('/').pop();

  if (page === 'clientes.html' || page === '') {
    if (document.getElementById('cli-id')) nuevoClienteInit();
  }

  if (page === 'pedidos.html') {
    const params = new URLSearchParams(window.location.search);
    nuevoPedido();
    if (ERP.pedidoActivo) llenarFormPedido(ERP.pedidoActivo);
  }

  if (page === 'credito.html') {
    // Cargar pedido activo desde session si existe
    const f = sessionStorage.getItem('erp_pedido_credito');
    if (f) {
      ERP.pedidoActivo = ERP.pedidos.find(p => p.folio === f);
    }
    renderCreditoCliente();
    // Render tabla de pedidos pendientes de crédito
    const tbody = document.getElementById('lista-pedidos-credito');
    if (tbody) {
      ERP.pedidos.filter(p => p.estado === 'Validación cliente').forEach(p => {
        const cli = ERP.clientes.find(c => c.id === p.cliente_id);
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${p.folio}</td>
          <td>${cli?.nombre || p.cliente_id}</td>
          <td>${fmtDate(p.fecha)}</td>
          <td>${badgeHTML(p.estado)}</td>
          <td><button class="btn btn-primary btn-sm" onclick="seleccionarPedidoCredito('${p.folio}')">Revisar</button></td>
        `;
        tbody.appendChild(tr);
      });
    }
  }

  if (page === 'factura.html') {
    cargarPedidosParaFactura();
  }
});

function nuevoClienteInit() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'new') nuevoCliente();
}

function seleccionarPedidoCredito(folio) {
  ERP.pedidoActivo = ERP.pedidos.find(p => p.folio === folio);
  sessionStorage.setItem('erp_pedido_credito', folio);
  renderCreditoCliente();

  const secLista = document.getElementById('seccion-lista-credito');
  const secForm  = document.getElementById('seccion-form-credito');
  if (secLista) secLista.style.display = 'none';
  if (secForm)  secForm.style.display  = '';
}