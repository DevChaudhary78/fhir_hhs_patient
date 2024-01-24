<template>
  <main>
    <div id="card">
      <h3>John Doe</h3>
      <p>100 Main St E</p>
      <a href="#">Details</a>
    </div>
    <div id="card">
      <h3>John Doe</h3>
      <p>100 Main St E</p>
      <a href="#">Details</a>
    </div>
    <div id="card">
      <h3>John Doe</h3>
      <p>100 Main St E</p>
      <a href="#">Details</a>
    </div>
    <div id="card">
      <h3>John Doe</h3>
      <p>100 Main St E</p>
      <a href="#">Details</a>
    </div>
    <div id="card">
      <h3>John Doe</h3>
      <p>100 Main St E</p>
      <a href="#">Details</a>
    </div>
    <div id="card">
      <h3>John Doe</h3>
      <p>100 Main St E</p>
      <a href="#">Details</a>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 85vh;
  background: #fde4cf;
  display: grid;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

#card {
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #ffcfd2;
}
</style>
