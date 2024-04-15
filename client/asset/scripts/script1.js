var InitialCount = -1;
// var len = 0


const deleteProducts = async() => {
    url = 'https://ai-bill-api.vercel.app/product';

    let res = await axios.get(url);
    responseText = res.data;
    const products = responseText;

    for (let product of products) {
        const response = await axios.delete(`https://ai-bill-api.vercel.app/product/${product.id}`)

    }
    // location.reload();
    window.location.href = "https://aibill.rf.gd/index.php";
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}


const loadprds= async(newData) => {
    $("#1").css("display", "none");
    $("#home").css("display", "flex");
    $("#final").css("display", "flex");
    var payable = 0;
    const products = newData;
    console.log(products);
    for (let product of products) {
        payable = payable + parseFloat(product.payable);

    }

    var product = products.pop();
    const x = `
    
            <div class="card card-long animated fadeInUp once">
                <img src="asset/img/${product.id}.jpg" class="album">
                <div class="span1 desc">Product Name</div>
                <div class="card__product">
                    <span>${product.name}</span>
                </div>
                <div class="span2 desc">Unit Cost</div>
                <div class="card__price">
                    <span>${product.price} </span>
                </div>
                <div class="span3 desc">Units</div>
                <div class="card__unit">
                    <span>${product.taken} ${product.unit} g</span>
                </div>

                <div class="span4 desc">Total</div>
                <div class="card__amount">
                    <span>₹ ${product.payable}</span>
                </div>
            </div>
            <hr>
    
    `

    document.getElementById('home').innerHTML = document.getElementById('home').innerHTML + x;
    document.getElementById('2').innerHTML = "CHECKOUT &nbsp ₹ " + payable;
    InitialCount += 1;
}

const firstload = async() =>{
    url = 'https://ai-bill-api.vercel.app/product';

    let res = await axios.get(url);
    responseText = await res.data;
    const products = responseText;
    var len = products.length;
    
    if (len > InitialCount + 1){
        $("#1").css("display", "none");
        $("#home").css("display", "flex");
        $("#final").css("display", "flex");

        var payable = 0;
        const products = responseText;
        console.log(products);
        for (let product of products) {
            payable = payable + parseFloat(product.payable);

            const x = `
          
                    <div class="card card-long animated fadeInUp once">
                        <img src="asset/img/${product.id}.jpg" class="album">
                        <div class="span1 desc">Product Name</div>
                        <div class="card__product">
                            <span>${product.name}</span>
                        </div>
                        <div class="span2 desc">Unit Cost</div>
                        <div class="card__price">
                            <span>${product.price} </span>
                        </div>
                        <div class="span3 desc">Units</div>
                        <div class="card__unit">
                            <span>${product.unit} g</span>
                        </div>

                        <div class="span4 desc">Total</div>
                        <div class="card__amount">
                            <span>₹ ${product.payable}</span>
                        </div>
                    </div>
                    <hr>
            `
            document.getElementById('home').innerHTML = document.getElementById('home').innerHTML + x;
        }
        document.getElementById('2').innerHTML = "CHECKOUT &nbsp ₹ " + payable;
        InitialCount=len-1;
    }
}

const loadProducts = async() => {
    url = 'https://ai-bill-api.vercel.app/product';

    let res = await axios.get(url);
    responseText = await res.data;
    const products = responseText;
    var len=products.length;
    // if(products.length>len){
    //     len=products.length;
    // }

    if (len > InitialCount + 1) {
        $("#1").css("display", "none");
        $("#home").css("display", "flex");
        $("#final").css("display", "flex");
        var payable = 0;
        const products = responseText;
        console.log(products);
        for (let product of products) {
            payable = payable + parseFloat(product.payable);
        }

        var product = products.pop();
        const x = `
       
                <div class="card card-long animated fadeInUp once">
                    <img src="asset/img/${product.id}.jpg" class="album">
                    <div class="span1 desc">Product Name</div>
                    <div class="card__product">
                        <span>${product.name}</span>
                    </div>
                    <div class="span2 desc">Unit Cost</div>
                    <div class="card__price">
                        <span>${product.price} </span>
                    </div>
                    <div class="span3 desc">Units</div>
                    <div class="card__unit">
                        <span>${product.unit} g</span>
                    </div>

                    <div class="span4 desc">Total</div>
                    <div class="card__amount">
                        <span>₹ ${product.payable}</span>
                    </div>
                </div>
            <hr>
        `
        // <span>${product.taken} ${product.unit}</span>    use in card unit div

        document.getElementById('home').innerHTML = document.getElementById('home').innerHTML + x;
        document.getElementById('2').innerHTML = "CHECKOUT &nbsp ₹ " + payable;
        InitialCount += 1;
    }


}



var checkout = async() => {
    document.getElementById('2').innerHTML = "<span class='loader-16' style='margin-left: 44%;'></span>"
    var payable = 0;
    url = 'https://ai-bill-api.vercel.app/product';

    let res = await axios.get(url);
    responseText = await res.data;
    products = responseText;

    for (let product of products) {
        payable = payable + parseFloat(product.payable);
    }

    const upiId = 'arul.virumbi@oksbi';
    // const transactionId = 'your-unique-transaction-id';
    const transactionNote = 'Order';
    const name='Arul';

    $("#home").css("display", "none");
    $("#final").css("display", "none");
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    $("#qr").css("display", "grid");

    const qrCode = new QRCode(document.getElementById('qr'), {
        text: `upi://pay?pa=${upiId}&mc&tr=${payable}&tn=${transactionNote}&pn=${name}&cu=INR`,
        width: 256,
        height: 256,
        colorDark: '#000000', // Dark color of the QR code
        colorLight: '#ffffff', // Light color of the QR code
        correctLevel: QRCode.CorrectLevel.H, // Error correction level
    });


    await new Promise((resolve) => setTimeout(resolve, 10000));
    $("#qr").css("display", "none");
    $("#success").css("display", "grid");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    deleteProducts();
}