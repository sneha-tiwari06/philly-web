import React from "react";
import Link from "next/link";

const Checkout = () => {
  return (
    <>
      <main>
        <div className="w-100 emptyBox"></div>
        <div className="w-100 breadcrumb-wrapper bg-primary">
          <div className="container-lg">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Billing Details</li>
              </ol>
            </nav>
          </div>
        </div>
        <section className="w-100 position-relative overflow-hidden padding section-cart">
          <div className="container-lg">
          <form method="POST" encType="multipart/form-data">
                    <div className="row g-4">
                        <div className="col-lg-9  formContainer">
                            <div id="payment-message" className="alert alert-success alert-dismissible fade d-none" role="alert">
                                <strong className="payment-message"></strong>
                            </div>
                            <div className="inner p-4 bg-secondary-light rounded newaddress">
                                <span className="text-warning py-3" id="token_response"></span>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label htmlFor="firstname">First Name<span className="text-danger">*</span></label>
                                        <input type="text" id="firstname" name="firstname" value="" className="form-control shadow-sm " />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label htmlFor="lastname">Last Name<span className="text-danger">*</span></label>
                                        <input type="text" id="lastname" name="lastname" value="" className="form-control shadow-sm " />
                                    </div>

                                    <div className="col-sm-4 form-group">
                                        <label htmlFor="companyname">Company Name (Optional)</label>
                                        <input type="text" id="companyname" name="companyname" value="" className="form-control shadow-sm   " placeholder="E.g. Capgamini" />
                                    </div>

                                    <div className="col-sm-4 form-group">
                                      <label htmlFor="Country"> Country <span className="text-danger">*</span></label>
                                      <select name="countryname" id="countryname" className="form-control form-select shadow-sm ">
                                        <option value="">Choose Country Name</option>
                                        <option value="1" data-phonecode="93">Afghanistan</option>
                                        <option value="2" data-phonecode="+358-18">Aland Islands</option>
                                        <option value="3" data-phonecode="355">Albania</option>
                                        <option value="4" data-phonecode="213">Algeria</option>
                                        <option value="5" data-phonecode="+1-684">American Samoa</option>
                                        <option value="6" data-phonecode="376">Andorra</option>
                                        <option value="7" data-phonecode="244">Angola</option>
                                        <option value="8" data-phonecode="+1-264">Anguilla</option>
                                        <option value="9" data-phonecode="">Antarctica</option>
                                        <option value="10" data-phonecode="+1-268">Antigua And Barbuda</option>
                                        <option value="11" data-phonecode="54">Argentina</option>
                                        <option value="12" data-phonecode="374">Armenia</option>
                                        <option value="13" data-phonecode="297">Aruba</option>
                                        <option value="14" data-phonecode="61">Australia</option>
                                        <option value="15" data-phonecode="43">Austria</option>
                                        <option value="16" data-phonecode="994">Azerbaijan</option>
                                        <option value="17" data-phonecode="+1-242">Bahamas The</option>
                                        <option value="18" data-phonecode="973">Bahrain</option>
                                        <option value="19" data-phonecode="880">Bangladesh</option>
                                        <option value="20" data-phonecode="+1-246">Barbados</option>
                                        <option value="21" data-phonecode="375">Belarus</option>
                                        <option value="22" data-phonecode="32">Belgium</option>
                                        <option value="23" data-phonecode="501">Belize</option>
                                        <option value="24" data-phonecode="229">Benin</option>
                                        <option value="25" data-phonecode="+1-441">Bermuda</option>
                                        <option value="26" data-phonecode="975">Bhutan</option>
                                        <option value="27" data-phonecode="591">Bolivia</option>
                                        <option value="155" data-phonecode="599">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="28" data-phonecode="387">Bosnia and Herzegovina</option>
                                        <option value="29" data-phonecode="267">Botswana</option>
                                        <option value="30" data-phonecode="0055">Bouvet Island</option>
                                        <option value="31" data-phonecode="55">Brazil</option>
                                        <option value="32" data-phonecode="246">British Indian Ocean Territory</option>
                                        <option value="33" data-phonecode="673">Brunei</option>
                                        <option value="34" data-phonecode="359">Bulgaria</option>
                                        <option value="35" data-phonecode="226">Burkina Faso</option>
                                        <option value="36" data-phonecode="257">Burundi</option>
                                        <option value="37" data-phonecode="855">Cambodia</option>
                                        <option value="38" data-phonecode="237">Cameroon</option>
                                        <option value="39" data-phonecode="1">Canada</option>
                                        <option value="40" data-phonecode="238">Cape Verde</option>
                                        <option value="41" data-phonecode="+1-345">Cayman Islands</option>
                                        <option value="42" data-phonecode="236">Central African Republic</option>
                                        <option value="43" data-phonecode="235">Chad</option>
                                        <option value="44" data-phonecode="56">Chile</option>
                                        <option value="45" data-phonecode="86">China</option>
                                        <option value="46" data-phonecode="61">Christmas Island</option>
                                        <option value="47" data-phonecode="61">Cocos (Keeling) Islands</option>
                                        <option value="48" data-phonecode="57">Colombia</option>
                                        <option value="49" data-phonecode="269">Comoros</option>
                                        <option value="50" data-phonecode="242">Congo</option>
                                        <option value="51" data-phonecode="243">Congo The Democratic Republic Of The</option>
                                        <option value="52" data-phonecode="682">Cook Islands</option>
                                        <option value="53" data-phonecode="506">Costa Rica</option>
                                        <option value="54" data-phonecode="225">Cote D'Ivoire (Ivory Coast)</option>
                                        <option value="55" data-phonecode="385">Croatia (Hrvatska)</option>
                                        <option value="56" data-phonecode="53">Cuba</option>
                                        <option value="249" data-phonecode="599">Curaçao</option>
                                        <option value="57" data-phonecode="357">Cyprus</option>
                                        <option value="58" data-phonecode="420">Czech Republic</option>
                                        <option value="59" data-phonecode="45">Denmark</option>
                                        <option value="60" data-phonecode="253">Djibouti</option>
                                        <option value="61" data-phonecode="+1-767">Dominica</option>
                                        <option value="62" data-phonecode="+1-809 and 1-829">Dominican Republic</option>
                                        <option value="63" data-phonecode="670">East Timor</option>
                                        <option value="64" data-phonecode="593">Ecuador</option>
                                        <option value="65" data-phonecode="20">Egypt</option>
                                        <option value="66" data-phonecode="503">El Salvador</option>
                                        <option value="67" data-phonecode="240">Equatorial Guinea</option>
                                        <option value="68" data-phonecode="291">Eritrea</option>
                                        <option value="69" data-phonecode="372">Estonia</option>
                                        <option value="70" data-phonecode="251">Ethiopia</option>
                                        <option value="71" data-phonecode="500">Falkland Islands</option>
                                        <option value="72" data-phonecode="298">Faroe Islands</option>
                                        <option value="73" data-phonecode="679">Fiji Islands</option>
                                        <option value="74" data-phonecode="358">Finland</option>
                                        <option value="75" data-phonecode="33">France</option>
                                        <option value="76" data-phonecode="594">French Guiana</option>
                                        <option value="77" data-phonecode="689">French Polynesia</option>
                                        <option value="78" data-phonecode="">French Southern Territories</option>
                                        <option value="79" data-phonecode="241">Gabon</option>
                                        <option value="80" data-phonecode="220">Gambia The</option>
                                        <option value="81" data-phonecode="995">Georgia</option>
                                        <option value="82" data-phonecode="49">Germany</option>
                                        <option value="83" data-phonecode="233">Ghana</option>
                                        <option value="84" data-phonecode="350">Gibraltar</option>
                                        <option value="85" data-phonecode="30">Greece</option>
                                        <option value="86" data-phonecode="299">Greenland</option>
                                        <option value="87" data-phonecode="+1-473">Grenada</option>
                                        <option value="88" data-phonecode="590">Guadeloupe</option>
                                        <option value="89" data-phonecode="+1-671">Guam</option>
                                        <option value="90" data-phonecode="502">Guatemala</option>
                                        <option value="91" data-phonecode="+44-1481">Guernsey and Alderney</option>
                                        <option value="92" data-phonecode="224">Guinea</option>
                                        <option value="93" data-phonecode="245">Guinea-Bissau</option>
                                        <option value="94" data-phonecode="592">Guyana</option>
                                        <option value="95" data-phonecode="509">Haiti</option>
                                        <option value="96" data-phonecode="">Heard Island and McDonald Islands</option>
                                        <option value="97" data-phonecode="504">Honduras</option>
                                        <option value="98" data-phonecode="852">Hong Kong S.A.R.</option>
                                        <option value="99" data-phonecode="36">Hungary</option>
                                        <option value="100" data-phonecode="354">Iceland</option>
                                        <option value="101" data-phonecode="91">India</option>
                                        <option value="102" data-phonecode="62">Indonesia</option>
                                        <option value="103" data-phonecode="98">Iran</option>
                                        <option value="104" data-phonecode="964">Iraq</option>
                                        <option value="105" data-phonecode="353">Ireland</option>
                                        <option value="106" data-phonecode="972">Israel</option>
                                        <option value="107" data-phonecode="39">Italy</option>
                                        <option value="108" data-phonecode="+1-876">Jamaica</option>
                                        <option value="109" data-phonecode="81">Japan</option>
                                        <option value="110" data-phonecode="+44-1534">Jersey</option>
                                        <option value="111" data-phonecode="962">Jordan</option>
                                        <option value="112" data-phonecode="7">Kazakhstan</option>
                                        <option value="113" data-phonecode="254">Kenya</option>
                                        <option value="114" data-phonecode="686">Kiribati</option>
                                        <option value="115" data-phonecode="850">Korea North</option>
                                        <option value="116" data-phonecode="82">Korea South</option>
                                        <option value="248" data-phonecode="383">Kosovo</option>
                                        <option value="117" data-phonecode="965">Kuwait</option>
                                        <option value="118" data-phonecode="996">Kyrgyzstan</option>
                                        <option value="119" data-phonecode="856">Laos</option>
                                        <option value="120" data-phonecode="371">Latvia</option>
                                        <option value="121" data-phonecode="961">Lebanon</option>
                                        <option value="122" data-phonecode="266">Lesotho</option>
                                        <option value="123" data-phonecode="231">Liberia</option>
                                        <option value="124" data-phonecode="218">Libya</option>
                                        <option value="125" data-phonecode="423">Liechtenstein</option>
                                        <option value="126" data-phonecode="370">Lithuania</option>
                                        <option value="127" data-phonecode="352">Luxembourg</option>
                                        <option value="128" data-phonecode="853">Macau S.A.R.</option>
                                        <option value="129" data-phonecode="389">Macedonia</option>
                                        <option value="130" data-phonecode="261">Madagascar</option>
                                        <option value="131" data-phonecode="265">Malawi</option>
                                        <option value="132" data-phonecode="60">Malaysia</option>
                                        <option value="133" data-phonecode="960">Maldives</option>
                                        <option value="134" data-phonecode="223">Mali</option>
                                        <option value="135" data-phonecode="356">Malta</option>
                                        <option value="136" data-phonecode="+44-1624">Man (Isle of)</option>
                                        <option value="137" data-phonecode="692">Marshall Islands</option>
                                        <option value="138" data-phonecode="596">Martinique</option>
                                        <option value="139" data-phonecode="222">Mauritania</option>
                                        <option value="140" data-phonecode="230">Mauritius</option>
                                        <option value="141" data-phonecode="262">Mayotte</option>
                                        <option value="142" data-phonecode="52">Mexico</option>
                                        <option value="143" data-phonecode="691">Micronesia</option>
                                        <option value="144" data-phonecode="373">Moldova</option>
                                        <option value="145" data-phonecode="377">Monaco</option>
                                        <option value="146" data-phonecode="976">Mongolia</option>
                                        <option value="147" data-phonecode="382">Montenegro</option>
                                        <option value="148" data-phonecode="+1-664">Montserrat</option>
                                        <option value="149" data-phonecode="212">Morocco</option>
                                        <option value="150" data-phonecode="258">Mozambique</option>
                                        <option value="151" data-phonecode="95">Myanmar</option>
                                        <option value="152" data-phonecode="264">Namibia</option>
                                        <option value="153" data-phonecode="674">Nauru</option>
                                        <option value="154" data-phonecode="977">Nepal</option>
                                        <option value="156" data-phonecode="31">Netherlands The</option>
                                        <option value="157" data-phonecode="687">New Caledonia</option>
                                        <option value="158" data-phonecode="64">New Zealand</option>
                                        <option value="159" data-phonecode="505">Nicaragua</option>
                                        <option value="160" data-phonecode="227">Niger</option>
                                        <option value="161" data-phonecode="234">Nigeria</option>
                                        <option value="162" data-phonecode="683">Niue</option>
                                        <option value="163" data-phonecode="672">Norfolk Island</option>
                                        <option value="164" data-phonecode="+1-670">Northern Mariana Islands</option>
                                        <option value="165" data-phonecode="47">Norway</option>
                                        <option value="166" data-phonecode="968">Oman</option>
                                        <option value="167" data-phonecode="92">Pakistan</option>
                                        <option value="168" data-phonecode="680">Palau</option>
                                        <option value="169" data-phonecode="970">Palestinian Territory Occupied</option>
                                        <option value="170" data-phonecode="507">Panama</option>
                                        <option value="171" data-phonecode="675">Papua new Guinea</option>
                                        <option value="172" data-phonecode="595">Paraguay</option>
                                        <option value="173" data-phonecode="51">Peru</option>
                                        <option value="174" data-phonecode="63">Philippines</option>
                                        <option value="175" data-phonecode="870">Pitcairn Island</option>
                                        <option value="176" data-phonecode="48">Poland</option>
                                        <option value="177" data-phonecode="351">Portugal</option>
                                        <option value="178" data-phonecode="+1-787 and 1-939">Puerto Rico</option>
                                        <option value="179" data-phonecode="974">Qatar</option>
                                        <option value="180" data-phonecode="262">Reunion</option>
                                        <option value="181" data-phonecode="40">Romania</option>
                                        <option value="182" data-phonecode="7">Russia</option>
                                        <option value="183" data-phonecode="250">Rwanda</option>
                                        <option value="184" data-phonecode="290">Saint Helena</option>
                                        <option value="185" data-phonecode="+1-869">Saint Kitts And Nevis</option>
                                        <option value="186" data-phonecode="+1-758">Saint Lucia</option>
                                        <option value="187" data-phonecode="508">Saint Pierre and Miquelon</option>
                                        <option value="188" data-phonecode="+1-784">Saint Vincent And The Grenadines</option>
                                        <option value="189" data-phonecode="590">Saint-Barthelemy</option>
                                        <option value="190" data-phonecode="590">Saint-Martin (French part)</option>
                                        <option value="191" data-phonecode="685">Samoa</option>
                                        <option value="192" data-phonecode="378">San Marino</option>
                                        <option value="193" data-phonecode="239">Sao Tome and Principe</option>
                                        <option value="194" data-phonecode="966">Saudi Arabia</option>
                                        <option value="195" data-phonecode="221">Senegal</option>
                                        <option value="196" data-phonecode="381">Serbia</option>
                                        <option value="197" data-phonecode="248">Seychelles</option>
                                        <option value="198" data-phonecode="232">Sierra Leone</option>
                                        <option value="199" data-phonecode="65">Singapore</option>
                                        <option value="250" data-phonecode="1721">Sint Maarten (Dutch part)</option>
                                        <option value="200" data-phonecode="421">Slovakia</option>
                                        <option value="201" data-phonecode="386">Slovenia</option>
                                        <option value="202" data-phonecode="677">Solomon Islands</option>
                                        <option value="203" data-phonecode="252">Somalia</option>
                                        <option value="204" data-phonecode="27">South Africa</option>
                                        <option value="205" data-phonecode="">South Georgia</option>
                                        <option value="206" data-phonecode="211">South Sudan</option>
                                        <option value="207" data-phonecode="34">Spain</option>
                                        <option value="208" data-phonecode="94">Sri Lanka</option>
                                        <option value="209" data-phonecode="249">Sudan</option>
                                        <option value="210" data-phonecode="597">Suriname</option>
                                        <option value="211" data-phonecode="47">Svalbard And Jan Mayen Islands</option>
                                        <option value="212" data-phonecode="268">Swaziland</option>
                                        <option value="213" data-phonecode="46">Sweden</option>
                                        <option value="214" data-phonecode="41">Switzerland</option>
                                        <option value="215" data-phonecode="963">Syria</option>
                                        <option value="216" data-phonecode="886">Taiwan</option>
                                        <option value="217" data-phonecode="992">Tajikistan</option>
                                        <option value="218" data-phonecode="255">Tanzania</option>
                                        <option value="219" data-phonecode="66">Thailand</option>
                                        <option value="220" data-phonecode="228">Togo</option>
                                        <option value="221" data-phonecode="690">Tokelau</option>
                                        <option value="222" data-phonecode="676">Tonga</option>
                                        <option value="223" data-phonecode="+1-868">Trinidad And Tobago</option>
                                        <option value="224" data-phonecode="216">Tunisia</option>
                                        <option value="225" data-phonecode="90">Turkey</option>
                                        <option value="226" data-phonecode="993">Turkmenistan</option>
                                        <option value="227" data-phonecode="+1-649">Turks And Caicos Islands</option>
                                        <option value="228" data-phonecode="688">Tuvalu</option>
                                        <option value="229" data-phonecode="256">Uganda</option>
                                        <option value="230" data-phonecode="380">Ukraine</option>
                                        <option value="231" data-phonecode="971">United Arab Emirates</option>
                                        <option value="232" data-phonecode="44">United Kingdom</option>
                                        <option value="233" data-phonecode="1">United States</option>
                                        <option value="234" data-phonecode="1">United States Minor Outlying Islands</option>
                                        <option value="235" data-phonecode="598">Uruguay</option>
                                        <option value="236" data-phonecode="998">Uzbekistan</option>
                                        <option value="237" data-phonecode="678">Vanuatu</option>
                                        <option value="238" data-phonecode="379">Vatican City State (Holy See)</option>
                                        <option value="239" data-phonecode="58">Venezuela</option>
                                        <option value="240" data-phonecode="84">Vietnam</option>
                                        <option value="241" data-phonecode="+1-284">Virgin Islands (British)</option>
                                        <option value="242" data-phonecode="+1-340">Virgin Islands (US)</option>
                                        <option value="243" data-phonecode="681">Wallis And Futuna Islands</option>
                                        <option value="244" data-phonecode="212">Western Sahara</option>
                                        <option value="245" data-phonecode="967">Yemen</option>
                                        <option value="246" data-phonecode="260">Zambia</option>
                                        <option value="247" data-phonecode="263">Zimbabwe</option>
                                      </select>
                                    </div>
                                    <div className="col-sm-4 form-group">
                                        <label htmlFor="state">State<span className="text-danger">*</span></label>
                                        <select name="state" id="state" className="form-control form-select shadow-sm">
                                          <option value="">choose state</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-12 form-group">
                                        <label htmlFor="streetadd">Street Address<span className="text-danger">*</span></label>
                                        <input type="text" id="streetadd" name="streetadd" value="" className="form-control shadow-sm   " />
                                    </div>

                                    <div className="col-sm-6 form-group">
                                        <label htmlFor="town">Town/City<span className="text-danger">*</span></label>
                                        <input type="text" id="town" name="town" value="" className="form-control shadow-sm   " />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label htmlFor="zip">Zip Code<span className="text-danger">*</span></label>
                                        <input type="text" id="zip" name="zip" value="" className="form-control checkadd shadow-sm   " placeholder="6 digits [0-9] PIN code" />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label htmlFor="mobile">Mobile number<span className="text-danger">*</span></label>
                                        <div className="row g-2">
                                          <div className="isd col-2">
                                              <input type="text" id="countrycode" className="form-control shadow-sm" name="countrycode" value="" readOnly />
                                          </div>
                                          <div className="col"><input type="text" id="mobile" name="mobile" value="" className="form-control shadow-sm" /></div>
                                      </div>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label htmlFor="uemail">Email Id<span className="text-danger">*</span></label>
                                        <input type="text" id="uemail" name="uemail" value="" className="form-control shadow-sm   " />
                                    </div>

                                    <div className="col-sm-6 form-group d-none">
                                      <div className="custom-control shadow-sm custom-checkbox custom-control-inline">
                                          <input type="checkbox" id="makedeafult" name="makedeafult" className="custom-control-input" value="yes" checked />
                                          <label className="custom-control-label" htmlFor="makedeafult">Make this my default address</label>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 cart-basket">
                          <div className="card bg-secondary-light shadow-sm">
                            <div className="card-body cartprice">
                              <p>Sub-total <strong className="basket-value">$<span id="subtotal">69</span></strong></p>
                              <p>Discount<strong className="basket-value" id="shipall">$<span id="coup_disc">0.00</span></strong></p>
                              <p>Credit Card Processing Fee<strong className="basket-value" id="estaxt">$<span id="estmtax"><span>2.81</span></span></strong></p>
                              <h6 className="fw-bolder">Total Cost <span className="basket-total-value" id="totalcost">$<span id="total_cost">71.81</span></span></h6>
                              
                              <div className="readmore " id="apple-pay-info" style={{'display': 'block'}}>
                                <div className="alert alert-primary small" role="alert">
                                  <i className="fa fa-circle-info text-primary"></i> Booking confirmation will be sent to the email linked to your Apple Pay profile.
                                </div>
                                <div className="text-center"> -- OR -- </div>
                              </div>                          
                              <div className="readmore">
                                <Link href="/checkout" className="button w-100">Confirm Booking</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;
