<template>
  <main>
    <form id="search">
      <input type="text" placeholder="Search Patient">
      <button type="submit">Search</button>
    </form>
    <div id="card_container">
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
      <div id="card">
        <h3>John Doe</h3>
        <p><span>Address: </span>100 Main St E</p>
        <p><span>Contact: </span>chaudharyd@hhsc.ca</p>
        <a href="#">Details</a>
      </div>
    </div>
    <nav id="pagination">
      <ul>
        <a href="#">
          <li>Prev</li>
        </a>
        <a href="#">
          <li>1</li>
        </a>
        <a href="#">
          <li>2</li>
        </a>
        <a href="#">
          <li>3</li>
        </a>
        <a href="#">
          <li>4</li>
        </a>
        <a href="#">
          <li>Next</li>
        </a>
      </ul>
    </nav>
  </main>
</template>

<style scoped>
main {
  background: #fde4cf;
  height: 85vh;
}

main #search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
}

main>#card_container {
  height: 90%;
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

nav ul {
  display: flex;
  margin: 0 auto;
  width: 10%;
  justify-content: space-around;
}

nav ul a {
  text-decoration: none;
  padding: 0.4rem;
}

nav ul a:hover {
  background: #b9fbc0;
  border-radius: 0.2rem;
}

nav ul a li {
  list-style: none;
}

#card h3 {
  font-weight: bolder;
  font-size: 1.5rem;
}

#card span {
  font-weight: bold;
}
</style>
