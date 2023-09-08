import React from 'react';

function Search({ searchResults }) {
    console.log(searchResults);
    
    return (
        <div>
            {searchResults.length === 0 ? (
                <h1 className="display-4 text-uppercase" style={{ textAlign: "center", marginTop: "50px" }}>No result was found</h1>
            ) : (
                <div className="tab-content" style={{"margin-top":"50px","margin-left":"30px"}}>
                    <div className="row g-3">
                        {searchResults.map((product) => (
                            <div className="col-md-3 col-sm-6">
      <div className="product-grid3">
        <div className="product-image3">
          <a href="#">
            <img className="pic-2" src={product.image} alt={product.title} />
            <img className="pic-1" src={product.image} alt={product.title} />
          </a>
          <ul className="social">
            <li><a href="#"><i className="fa fa-eye"></i></a></li>
            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
          </ul>
          <span className="product-new-label">New</span>
        </div>
        <div className="product-content">
          <h3 className="title"><a href="#">{`${product.name}`}</a></h3>
          <div className="price">
            {`$${product.price}`}
          </div>
          <ul className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <li key={i} className={`fa fa-star${i >= product.rating ? ' enable' : ''}`}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
