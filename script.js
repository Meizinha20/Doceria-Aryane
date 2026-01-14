* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(180deg, #fff0f7, #eef7ff);
}

header {
  background: linear-gradient(135deg, #ff8fc7, #7cc6ff);
  color: white;
  padding: 20px;
  text-align: center;
  position: sticky;
  top: 0;
}

.btn-carrinho {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  color: #ff69b4;
  border: none;
  padding: 8px 14px;
  border-radius: 30px;
}

.catalogo {
  padding: 20px;
}

.card {
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,.15);
}

.card img {
  width: 100%;
  border-radius: 15px;
}

.card h2 {
  font-family: 'Playfair Display', serif;
  color: #ff69b4;
}

label {
  display: block;
  margin-top: 10px;
}

select {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
}

.check {
  margin: 10px 0;
}

.card button {
  background: linear-gradient(135deg, #ff8fc7, #7cc6ff);
  color: white;
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 15px;
}

#overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.5);
  display: none;
}

#carrinho {
  position: fixed;
  right: -100%;
  top: 0;
  width: 85%;
  max-width: 400px;
  height: 100%;
  background: white;
  transition: .3s;
  z-index: 10;
}

#carrinho.ativo {
  right: 0;
}

.topo {
  background: linear-gradient(135deg, #ff8fc7, #7cc6ff);
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
}

#lista {
  padding: 15px;
  list-style: none;
}

.rodape {
  padding: 15px;
}

.whats {
  background: #25d366;
  color: white;
  border: none;
  width: 100%;
  padding: 14px;
  border-radius: 15px;
}

.insta {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: linear-gradient(135deg,#f58529,#dd2a7b,#8134af);
  color: white;
  padding: 14px;
  border-radius: 50%;
    }
