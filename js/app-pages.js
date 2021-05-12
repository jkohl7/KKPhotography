const HomePage = Vue.component('HomePage',{
    data() {
        return {

        }
    },
    methods:{
        addToSchedule(Package){
        }
    },

    template: ` 
    <!--Home page content -->
    <div class="content">
    <img src="cam.jpg" />
      <div class="home">
        <p>Operating from a new <br/>
        studio on Main Street,<br/>
        Kathy Kohl is the proud<br/>
        owner of KK Photography.</p>

      </div>
      <div class="home">
        <p>KK Photography LLC.<br/>
        300 East Main Street<br/>
        Waterford WI<br/>
        53185<br/>
        414-861-8749</p>
      </div>
      </div>
  `
});

const GalleryPage = Vue.component('GalleryPage',{
    data() {
        return {

        }
    },
    methods:{
        addToSchedule(Package){
        }
    },

    template: ` 
   <body>

<!-- Header for gallery-->
<div class="header">
  <h2>Photo Gallery</h2>
</div>

  <!--Content for gallery -->
<div class="row"> 
  <div class="column">
    <img src="images/cliff.jpg"  style="width:100%">
    <img src="images/dock.jpg"  style="width:100%"/>
     <img src="images/guy.jpg"  style="width:100%"/>
    <img src="images/grad.jpg"  style="width:100%"/>
  </div>
  <div class="column">
  <img src="images/wedding2.jpg"  style="width:100%"/>
  <img src="images/person.jpg" style="width:100%">
  <img src="images/family2.jpg"  style="width:100%"/>
  <img src="images/wedding.jpg"  style="width:100%"/>
  </div>  
  <div class="column">
    <img src="images/lights.jpg" style="width:100%">
    <img src="images/people.jpg"  style="width:100%"/>
    <img src="images/waterfall.jpg" style="width:100%">
     <img src="images/lake.jpg" style="width:100%">    
  </div>
  <div class="column">
    <img src="images/wall.jpg" style="width:100%">
    <img src="images/family.jpg" style="width:100%">
    <img src="images/grad2.jpg"  style="width:100%"/>
    <img src="images/family3.jpg"  style="width:100%"/>
  </div>
</div>

</body>

  `
});

const AboutPage = Vue.component('AboutPage',{
    data() {
        return {

        }
    },
    methods:{
        addToSchedule(Package){
        }
    },

    template: ` 
  <div class="content">
    <img src="kathy.png"/>
      <div class="column">
        <div class="paragraph" style="text-align:left; padding-left: 50px ;padding-bottom: 20px">
        <!--Bold text for about tab -->
        <strong>Kathy J.Kohl</strong>
        <br />
        <strong>Owner of KK Photography & <br />Photographer</strong><br /><br />
        <!--standard text for about tab -->
        Kathy is the owner of KK Photography on Main Street in charming, downtown Waterford, WI, for over 20 years. Her photography captures moments for families, business portraits and much more.<br />
        <br />Kathy's passion is to please God by helping people overcome their troubles - especially young moms.<br />She also has a passion for helping small businesses brainstorm marketing and other fixes for their struggling businesses.<br />
        Kathy is not new to helping her community and non-profits making a difference. In addition to her volunteer service to<br />
        
        
        &bull; Volunteer co-planner of the women's conference called I Am Enough In Christ.<br />
        &bull; Ambassador for Muskego and Waterford Chamber of Commerce.<br />
        &bull; Founder & on planning committee for Mom&rsquo;s Day On Main Street.<br />
        &bull; Love Inc. and Food Pantry &ndash; Flood relief for Burlington, summer of 2017.<br />
        &bull; Wind Lake Fire Department &ndash; Kathy takes photos of fires and accidents for training purposes. She also donates her time to take staff portraits for IDs.<br />
        <br />World focus has been in her heart since her kids were little. She ventured out when they were teens:<br />Peru Mission Trip 2013<br />Kenya Mission Trip 2017<br /><br />
        </div>
        <style>
        </style
        
       
  `
});



const PackagesPage = Vue.component('PackagesPage', {
    data() {
        return {
            Packages: [
                <!--widgets for each package-->
                {name: 'High School Senior Photos', qty: 1, price: 335.00, description: 'Studio & outside within 30 minutes from studio.\n' +
                        'Yearbook photo will be submitted to school.\n' +
                        'Online Album to view images.\n' +
                        'Social media photos (up to 4 at no charge).\n' +
                        'Three outfits.\n' +
                        'Canvas wrap up to 8x10 ($45.00 value).\n' +
                        '3 wallet sized photos included.'},
                {name: 'Family Portraits', qty: 1, price: 175.00, description: 'Sitting Fee at studio or within.\n' +
                        '15 minutes of studio, includes up 11 people or more.\n' +
                        'One 10x15, two social media.\n' +
                        'photos, five digital files, online proofing.\n' +
                        'Canvas, metal prints, framing and more\n' +
                        'unique products available.'},
                {name: 'Wedding Photos', qty: 1, price: 1825.00, description: '600 to 700 photos online download\n' +
                        '10 Hours\n' +
                        'Travel Time (with-in 30 miles from studio)\n' +
                        'Digital Copyrights \n' +
                        'Albums are sold separate'},
                {name: 'Business Portraits', qty: 1, price: 125.00, description: ' includes sitting fee & two digital images emailed same day. \n' +
                        'Great for business cards, website, Facebook and other social media.'},
            ],
        }
    },
    methods:{
        addToSchedule(Package){
            <!--adds package to schedule-->
            this.$router.push({name: 'addToSchedule', params: {thing: Package, name: Package.name}})
        }
    },



    template: `
    <div class="Packages container" >
        <h2>Packages</h2>
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4" v-for="(Package, i) in Packages" :key="i">
              <div class="card">
                <img src="cam.jpg" class="card-img-top" alt="...">
                
                <!--Displays package information to user-->                
                <div class="card-body">
                  <h5 class="card-title">{{Package.name}}</h5>
                  <p class="card-text">{{Package.description}}</p>
                  <p class="card-text">\${{Package.price * Package.qty}}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <label>Quantity: 
                      <select v-model="Package.qty" class="">
                        <option v-for="i in 10" :value="i">{{i}}</option>
                      </select>
                  </label>
                      <!--takes user from pricing to schedule-->
                  <button @click="addToSchedule(Package)" class="btn btn-primary">Schedule Now </button>
                </div>
              </div>
            </div>
        </div>
    </div>
  `
});

const SchedulePage = Vue.component('SchedulePage', {
    data() {
        return {
            cart: {
                items: [
                    {name: 'High School Senior Photos', qty: 1, price: 335},
                ],

                payment: {},
            }
        }
    },
    <!--calculates cost-->
    computed: {
        subtotal() {
            return this.cart.items.reduce((total, item) => (total + item.price * item.qty), 0)
        },
        tax() {
            return this.subtotal * .05;
        },
        total() {
            return this.subtotal + this.tax;
        }
    },

    template: `
    <div class="cart">
        <h2>Schedule</h2>
        
        <div class="row">
            <div class="col col-md-8">
                <!--displays nested schedule router-->
                <ul class="nav nav-tabs mb-3">
                    <li class="nav-item">
                      <router-link to="/schedule/items" class="nav-link">1. Review</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/schedule/shipping" class="nav-link">2. Information</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/schedule/payment" class="nav-link">3. Payment</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/schedule/confirmation" class="nav-link">4. Checkout</router-link>
                    </li>
                </ul>
                <router-view :cart="cart"></router-view>
            </div>
            <div class="col col-md-4">
                <h3>Info Summary</h3>
                 <!--shows the user their info during scheduling-->
                <table class="table">
               
                    <tbody>
                        <tr>
                            <td>{{cart.items.length}} Item(s)</td>
                            <td>\${{subtotal.toFixed(2)}}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>\${{tax.toFixed(2)}}</td>
                        </tr>
                        <tr v-if="cart.payment.creditCard">
                            <td>Payment</td>
                            <td>{{cart.payment.creditCard.substr(-4, 4)}}</td>
                        </tr>
                        <tr  class="font-weight-bold">
                            <td>Total</td>
                            <td>\${{total.toFixed(2)}}</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
  `
});

<!--Shows the user their package they are scheduling-->
const ScheduleItems = {
  props: {
      cart: {
          type: Object,
          required: true,
      }
  },
    template: `
   <form action="/">
        <div class="banner">
    <div>
        <h3>Items</h3>
            <table class="table">
                <thead>
                 <tr>
                    <th>Items</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in cart.items" :key="i">
                    <th>{{item.name}}</th>
                    <th>{{item.qty}}</th>
                    <th>{{item.price}}</th>
                </tr>
            </tbody>
        </table>
        <!--takes the user to the next tab-->
         <router-link to="/schedule/shipping" class="btn btn-primary">Next</router-link>
    </div>
    </div>
    </form>
    
    `
}


const ScheduleInfo = {
        props: {
            cart: {
                type: Object,
                required: true,
            }
        },
        template: `
        
           <body>
   
      <form action="/">
        <div class="banner">
         <div>
             <h3>Personal Information</h3>
         <!--Form for the user's personal information-->
        </div>
        <div class="colums">
          <div class="item">
            <label for="first"> First Name<span>*</span></label>
            <input id="first" type="text" name="first" required/>
          </div>
          <div class="item">
            <label for="last"> Last Name<span>*</span></label>
            <input id="last" type="text" name="last" required/>
          </div>
          <div class="item">
            <label for="address">Address <span>*</span></label>
            <input id="address" type="text"   name="address" required/>
          </div>
          <div class="item">
            <label for="city">City<span>*</span></label>
            <input id="city" type="text"   name="city" required/>
          </div>
          <div class="item">
            <label for="zip">Zip/Postal Code<span>*</span></label>
            <input id="zip" type="text" name="zip" required/>
          </div>
          <div class="item">
            <label for="email">Email Address<span>*</span></label>
            <input id="email" type="text"   name="email" required/>
          </div>
          <div class="item">
            <label for="phone">Phone<span>*</span></label>
            <input id="phone" type="tel"   name="phone" required/>
          </div>
        </div>
        <div class="question">
          <label>Photoshoot Location</label>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="type"/>
              <label for="radio_1" class="radio"><span>In Studio</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_2" name="type"/>
              <label for="radio_2" class="radio"><span>On Location</span></label>
            </div>
          </div>
        </div>
        <div class="btn-block">
        <!--takes the user to the next tab-->
          <router-link to="/schedule/payment" class="btn btn-primary">Next</router-link>
        </div>
      </form>
       </div>
           
             
   `

};
// TODO: payment info page
const SchedulePayment = {
    props: {
        cart: {
            type: Object,
            required: true,
        }
    },
    template: `
     
      <!--form for the user's payment information-->
      <form action="/">
        <div class="banner">
          <h3>Credit Card Payment</h3>
        <div class="colums">
          <div class="item">
            <label for="cardname"> Name On Card<span>*</span></label>
            <input id="cardname" type="text" name="cardname" required/>
          </div>
          <div class="item">
            <label for="cardnum"> Card Number<span>*</span></label>
            <input id="cardnum" type="text" v-model="cart.payment.creditCard" name="cardnum" required/>
          </div>
          <div class="item">
            <label for="experation">Experation<span>*</span></label>
            <input id="experation" type="month" name="experation" required/>
          </div>
          <div class="item">
            <label for="cvv">CVV<span>*</span></label>
            <input id="cvv" type="tel"   name="cvv" required/>
          </div>
        </div>
        <div class="btn-block">
        <!--takes the user to the next tab-->
          <router-link to="/schedule/confirmation" class="btn btn-primary">Finish</router-link>
        </div>
      </form>
       </div>
       </div>
      </div>
           
 
   `
};
const ScheduleConfirmation = {props: {
        cart: {
            type: Object,
            required: true,
        }
    },
    template: `
   <form action="/">
        <div class="banner">
        <!--shows completed screen to user-->
        <div>
           <h2>You're all set!</h2>
           <p>Thanks for booking with KKPhotography!</p>
           <p>Kathy will get in contact with you and looks forward to the photoshoot!</p>
            <router-link to="/home" class="btn btn-primary">Back to home</router-link>
          
       </div>
       </div>  
   </form>
          
   `
};