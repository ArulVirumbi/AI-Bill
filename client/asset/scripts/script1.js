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
    window.location.href = "https://aibill.rf.gd/index.html";
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
                    <span>${product.taken} ${product.unit}</span>
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
                            <span>${product.unit}</span>
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
                        <span>${product.unit}</span>
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

    var url = "https://api.scanova.io/v2/qrcode/text?data=upi%3A%2F%2Fpay%3Fpa%3Dshebinjosejacob2014%40oksbi%26pn%3DTXN965654954321%26tn%3DA%26am%3D4%26cu%3DINR%26url%3Dhttps%3A%2F%2Fcoderscafe.cf%2F&size=l&error_correction=M&data_pattern=RECT&eye_pattern=TLBR_LEAF&data_gradient_style=Radial&data_gradient_start_color=%2302c8db&data_gradient_end_color=%2302c8db&eye_color_inner=%2302c8db&eye_color_outer=%2302c8db&background_color=%23ecf0f3&logo.size=15&logo.excavated=true&logo.angle=0&poster.left=50&poster.top=50&poster.size=40&poster.eyeshape=ROUND_RECT&poster.dataPattern=ROUND&format=png&apikey=fmdtvmmwccekndkpalsltpzhvfmnpsmuhrvhpxzf";

    await fetch(url)
        .then(function(data) {
            return data.blob();
        })
        .then(function(img) {
            var image = URL.createObjectURL(img);
            $("#home").css("display", "none");
            $("#final").css("display", "none");
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $('#image').attr('src', image);
            $("#qr").css("display", "grid");

        });
    setTimeout(function(){
        $("#qr").css("display", "none");
        $("#success").css("display", "grid");
            },10000);
        

    // window.location.href = "upi://pay?pa=shebinjosejacob2014@oksbi&pn=TXN9656549238&tn=A&am=1&cu=INR&url=https://assettracker.cf/"*/
    deleteProducts();
}