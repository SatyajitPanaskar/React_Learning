import React from "react";
import './CardAssignment.css'
function CardAssignment() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div class="card col-3 m-5" >
            <img src="../documentNew/img1.jpg" class="card-img-top imgAll" alt="img1" />
            <div class="card-body">
              <h5 class="card-title">Rainbow Clothing</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn " id="btn_01">
              Add to Card
              </a>
              <a href="#" class="btn" id="btn_02" >
              Buy Now  
              </a>
            </div>
          </div>
          <div class="card col-3 m-5" >
          <img src="../logo512.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Lymio</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
              Buy Now
              </a>
            </div>
          </div>
          <div class="card col-3 m-5" >
          <img src="../logo512.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">MIRCHI FASHION</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
              Buy Now
              </a>
            </div>
          </div>
         
        </div>

        <div className="row">
          <div class="card col-3 m-5" >
          <img src="../logo512.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">C J Enterprise</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
              Buy Now
              </a>
            </div>
          </div>
          <div class="card col-3 m-5" >
          <img src="../logo512.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Monjolika Fashion</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
              Buy Now
              </a>
            </div>
          </div>
          <div class="card col-3 m-5" >
          <img src="../logo512.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">DHRUVI TRENDZ</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default CardAssignment;
