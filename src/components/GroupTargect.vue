<script setup lang="ts">
interface Group {
  id: number
  owner: number
  period_id: number
  name: string
  description: string
  active: boolean
  created_at: string | null
  updated_at: string | null
}

defineProps<{ group: Group}>()
</script>

<template>
  <div class="group-card-vibrant" :class="{ 'is-inactive': !group.active }">

    <div class="card-header-visual">
      <div class="period-tag">
        <span class="label">PERIODO</span>
        <span class="value">{{ group.period_id }}</span>
      </div>
      <div class="status-indicator" :title="group.active ? 'Grupo Activo' : 'Grupo Inactivo'"></div>
    </div>

    <div class="card-body">
      <h2 class="group-title">{{ group.name }}</h2>

      <p class="group-text-description">
        {{ group.description || 'Sin descripción detallada para este grupo académico actualmente.' }}
      </p>

      <div class="data-info-grid">
        <div class="data-box">
          <span class="data-label">ID GRUPO</span>
          <span class="data-value highlight-blue">#{{ group.id }}</span>
        </div>
        <div class="data-box">
          <span class="data-label">DOCENTE ID</span>
          <span class="data-value highlight-purple">{{ group.owner }}</span>
        </div>
      </div>
    </div>

    <div class="card-footer-colored">
      <span class="status-text">
        {{ group.active ? 'Estado: Activo ✔' : 'Estado: Finalizado ✘' }}
      </span>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.group-card-vibrant {
  /* Fuente principal más moderna y grande */
  font-family: 'Poppins', 'Inter', sans-serif;
  width: 380px; /* Un poco más ancha para textos grandes */
  background: #ffffff;
  border-radius: 24px; /* Bordes mucho más redondeados */
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1); /* Sombra más suave y profunda */
  border: 1px solid #f0f0f0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

.group-card-vibrant:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

/* --- Cabecera Visual --- */
.card-header-visual {
  height: 80px;
  /* Gradiente vibrante de azul a morado */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  padding: 15px 20px;
}

.period-tag {
  position: absolute;
  bottom: -15px;
  left: 20px;
  background: #ffcc00; /* Amarillo vibrante */
  color: #333;
  padding: 8px 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
}

.period-tag .label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.8;
}

.period-tag .value {
  font-size: 1.4rem; /* Texto Grande */
  font-weight: 800;
}

.status-indicator {
  position: absolute;
  top: 15px;
  right: 20px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #00e676; /* Verde neón activo */
  border: 3px solid white;
  box-shadow: 0 0 10px rgba(0, 230, 118, 0.5);
}

/* --- Cuerpo de la Tarjeta --- */
.card-body {
  padding: 40px 25px 20px 25px; /* Más padding arriba por el tag flotante */
}

.group-title {
  font-size: 1.8rem; /* TEXTO MUY GRANDE */
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 12px 0;
  line-height: 1.2;
}

.group-text-description {
  font-size: 1.05rem; /* Texto más grande que el estándar */
  color: #555;
  line-height: 1.6;
  margin-bottom: 25px;
  /* Limitamos a 3 líneas para control visual */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* --- Grid de Datos Técnicos --- */
.data-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 10px;
}

.data-box {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #eee;
}

.data-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: #888;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
}

.data-value {
  font-size: 1.2rem; /* Texto Grande */
  font-weight: 700;
}

.highlight-blue { color: #4e73df; }
.highlight-purple { color: #8e44ad; }

/* --- Footer Coloreado --- */
.card-footer-colored {
  background: #f4f6f8;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
}

.status-text {
  font-size: 1rem;
  font-weight: 600;
  color: #2e7d32; /* Verde oscuro para texto */
}

.view-more-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.view-more-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(118, 75, 162, 0.3);
}

/* --- ESTADO INACTIVO (Gris) --- */
.is-inactive .card-header-visual,
.is-inactive .view-more-btn {
  background: linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%) !important;
}

.is-inactive .period-tag {
  background: #95a5a6;
  color: white;
}

.is-inactive .status-indicator {
  background: #e74c3c; /* Rojo inactivo */
  box-shadow: 0 0 10px rgba(231, 76, 60, 0.5);
}

.is-inactive .highlight-blue,
.is-inactive .highlight-purple {
  color: #7f8c8d;
}

.is-inactive .status-text {
  color: #c0392b;
}
</style>
