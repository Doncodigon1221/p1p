<script setup lang="ts">


import type { Group } from '@/types/types.ts'

defineProps<{ group: Group }>()
</script>

<template>
  <div class="card" :class="{ 'is-inactive': !group.active }">

    <div class="card-top">
      <span class="period-pill">{{ group.period.name }} · {{ group.period.year }}</span>
      <div class="dot" :class="{ inactive: !group.active }" :title="group.active ? 'Grupo Activo' : 'Grupo Inactivo'"></div>
    </div>

    <div class="card-body">
      <p class="card-title">{{ group.name }}</p>
      <p class="card-desc">{{ group.description || 'Sin descripción detallada para este grupo académico.' }}</p>

      <div class="meta">
        <div class="meta-box">
          <div class="meta-label">ID grupo</div>
          <div class="meta-value blue">#{{ group.id }}</div>
        </div>
        <div class="meta-box">
          <div class="meta-label">Docente</div>
          <div class="meta-value teal">{{ group.owner.name }} {{ group.owner.lastname }}</div>
        </div>
      </div>
    </div>

    <div class="card-footer">
      <span class="status" :class="{ inactive: !group.active }">
        {{ group.active ? 'Activo' : 'Finalizado' }}
      </span>
      <div class="counts">
        <span class="count"><span>{{ group.students_count }}</span> alumnos</span>
        <span class="count"><span>{{ group.assignments_count }}</span> tareas</span>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card {
  width: 340px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-4px); }
.card-top {
  background: #1a1a2e;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.is-inactive .card-top { background: #2c1a1a; }
.period-pill {
  background: #faeeda;
  color: #633806;
  font-size: 11px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5dcaa5;
  margin-top: 2px;
}
.dot.inactive { background: #f09595; }
.card-body { padding: 1.25rem; }
.card-title {
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 6px;
  line-height: 1.3;
}
.card-desc {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.meta-box {
  background: #f8fafc;
  border-radius: 8px;
  padding: 10px 12px;
}
.meta-label {
  font-size: 11px;
  color: #999;
  margin-bottom: 3px;
}
.meta-value {
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
}
.meta-value.blue { color: #185fa5; }
.meta-value.teal { color: #0f6e56; }
.card-footer {
  padding: 12px 1.25rem;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.status { font-size: 12px; color: #0f6e56; font-weight: 500; }
.status.inactive { color: #a32d2d; }
.counts { display: flex; gap: 12px; }
.count { font-size: 12px; color: #888; }
.count span { font-weight: 500; color: #333; }
</style>
