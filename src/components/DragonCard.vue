<script setup lang="ts">
// 1. Actualizamos la interfaz para incluir la propiedad image (asumiendo que es una URL string)
interface Personaje {
  id: number
  name: string
  image: string // <-- Propiedad añadida
  ki: number
  maxKi: string
  race: string
  gender: string
  description: string
  affiliation: string
  deletedAt: string
}
defineProps<{ personaje: Personaje }>()
</script>

<template>
  <div class="card-container" :class="personaje.affiliation.toLowerCase().replace(' ', '-')">
    <div class="card-header">
      <span class="race-badge">{{ personaje.race }}</span>
      <h2 class="char-name">{{ personaje.name }}</h2>
    </div>

    <div class="image-container">
      <img :src="personaje.image" :alt="personaje.name" class="char-image" loading="lazy" />
      <span class="id-badge">#{{ personaje.id }}</span>
    </div>

    <div class="stats-grid">
      <div class="stat-item">
        <span class="label">KI ACTUAL</span>
        <span class="value">{{ personaje.ki.toLocaleString() }}</span>
      </div>
      <div class="stat-item">
        <span class="label">MAX KI</span>
        <span class="value text-gold">{{ personaje.maxKi }}</span>
      </div>
    </div>

    <div class="description-box">
      <p>{{ personaje.description }}</p>
    </div>

    <div class="card-footer">
      <span class="affiliation">{{ personaje.affiliation }}</span>
      <span class="gender-icon">{{ personaje.gender === 'Male' ? '♂' : '♀' }}</span>
    </div>
  </div>
</template>

<style scoped>
/* --- ESTILOS DE LA CARTA (Iguales al anterior pero ajustando la imagen) --- */

.card-container {
  width: 320px;
  height: 520px; /* Un poco más alta para que respire */
  background: #1a1a1a;
  border-radius: 15px;
  border: 4px solid #d4af37; /* Borde Dorado base */
  padding: 15px;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  margin: 10px;
}

/* Efecto hover */
.card-container:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 30px rgba(212, 175, 55, 0.3); /* Brillo dorado al pasar el mouse */
}

/* --- Colores Dinámicos según Afiliación (Ejemplos) --- */
/* Si la API devuelve "Z Fighter", la clase será .z-fighter */
.z-fighter {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  border-color: #ffd700;
}
/* Si la API devuelve "Frieza Force", la clase será .frieza-force */
.frieza-force {
  background: linear-gradient(135deg, #4b1248, #702082);
  border-color: #a333c8;
}
/* Por defecto o Red Ribbon */
.red-ribbon-army {
  background: linear-gradient(135deg, #870000, #190a05);
  border-color: #ff0000;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 30px;
}

.char-name {
  margin: 0;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 #000;
  font-weight: 900;
  letter-spacing: -1px;
}

.race-badge {
  background: rgba(255, 69, 0, 0.8);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
}

/* --- ESTILOS DE LA IMAGEN (Nuevo) --- */
.image-container {
  flex: 1; /* Ocupa el espacio disponible */
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-bottom: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; /* Corta la imagen si sobresale */
}

.char-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Ajusta la imagen sin deformarla */
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5)); /* Sombra a la figura del personaje */
}

.id-badge {
  position: absolute;
  top: 5px;
  right: 8px;
  font-weight: bold;
  font-size: 0.8rem;
  opacity: 0.6;
  text-shadow: 1px 1px 0 #000;
}

/* --- Resto de estilos --- */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.label {
  font-size: 0.65rem;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.value {
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0 #000;
}
.text-gold {
  color: #ffd700;
}

.description-box {
  height: 70px;
  overflow-y: auto;
  font-size: 0.8rem;
  line-height: 1.3;
  font-style: italic;
  padding: 0 5px;
  color: #ddd;
  scrollbar-width: thin; /* Para Firefox */
  scrollbar-color: #555 transparent;
}

/* Estilo de scrollbar para Chrome/Edge/Safari */
.description-box::-webkit-scrollbar {
  width: 4px;
}
.description-box::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 4px;
}

.card-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #aaa;
}

.gender-icon {
  font-size: 1.1rem;
}
</style>
