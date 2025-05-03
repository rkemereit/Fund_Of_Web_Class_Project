const product_one ='<div class="card_item"> \
    <div class="card_top"> \
        <img src="images/rug_one.jpg" alt="This is a product image"> \
    </div> \
    <div class="card_bottom"> \
        <h2>Atlas Aniseed 3\' x 5\' Accent Rug</h2> \
        <h3>Model Number: 434000-3569-11360 Menards ® SKU: 7636018</h3> \
        <h3>EVERYDAY LOW PRICE $19.99</h3> \
        <h3>SALE PRICE Good Through 11/5/23 $16.84</h3> \
        <h4>11% MAIL-IN REBATE Good Through 11/5/23 $1.85</h4> \
    </div> \
    <div class="card_button"> \
        <button>Add to Cart</button> \
    </div> \
</div> '; 



const product_two ='<div class="card_item"> \
    <div class="card_top"> \
        <img src="images/tape_measure.jpg" alt="This is a product image"> \
    </div> \
    <div class="card_bottom"> \
        <h2>Tool Shop® 25\' Tape Measure</h2> \
        <h3>Model Number: TS-69-7525 Menards ® SKU: 2433480</h3> \
        <h3>EVERYDAY LOW PRICE$3.99</h3> \
        <h3>SALE PRICE Good Through 11/5/23 $2.24</h3> \
        <h4>You Save $2.00 with Sale Price & Mail-In Rebate</h4> \
    </div> \
    <div class="card_button"> \
        <button>Add to Cart</button> \
    </div> \
</div> ';


const product_three ='<div class="card_item"> \
    <div class="card_top"> \
        <img src="images/staircase.jpg" alt="This is a product image"> \
    </div> \
    <div class="card_bottom"> \
        <h2>Arke Civik 55" x 120" Gray Spiral Staircase Kit</h2> \
        <h3>Model Number: K03032</h3> \
        <h3>EVERYDAY LOW PRICE$2,879.00</h3> \
        <h3>11% MAIL-IN REBATE Good Through 11/5/23$316.69</h3> \
        <h4>You Save $316.69 with Mail-In Rebate</h4> \
    </div> \
    <div class="card_button"> \
        <button>Add to Cart</button> \
    </div> \
</div> ';


const product_four ='<div class="card_item"> \
    <div class="card_top"> \
        <img src="images/refridge.jpg" alt="This is a product image"> \
    </div> \
    <div class="card_bottom"> \
        <h2>Criterion® Stainless Refrigerator</h2> \
        <h3>Model Number: CBMR187M4S Menards ® SKU: 4538064</h3> \
        <h3>EVERYDAY LOW PRICE $899.00</h3> \
        <h3>11% MAIL-IN REBATE Good Through 11/5/23 $98.89</h3> \
        <h4>You Save $98.89 with Mail-In Rebate </h4> \
    </div> \
    <div class="card_button"> \
        <button>Add to Cart</button> \
    </div> \
</div> ';




const product_five ='<div class="card_item"> \
    <div class="card_top"> \
        <img src="images/hammock.jpg" alt="This is a product image"> \
    </div> \
    <div class="card_bottom"> \
        <h2>Backyard Creations® Realtree® Camo Quilted Hammock</h2> \
        <h3>Model Number: 2938DL Menards ® SKU: 2722790</h3> \
        <h3>EVERYDAY LOW PRICE $99.99</h3> \
        <h3>11% MAIL-IN REBATE Good Through 11/5/23 $11.00</h3> \
        <h4>You Save $11.00 with Mail-In Rebate </h4> \
    </div> \
    <div class="card_button"> \
        <button>Add to Cart</button> \
    </div> \
</div> ';


const shuffleArray = array => [...array].sort(() => Math.random() - 0.5);

const numbers = [product_one, product_two, product_three, product_four, product_five];
const new_order = shuffleArray(numbers);

function loopFunction(item) {
    document.write(item);
}

new_order.forEach(loopFunction);