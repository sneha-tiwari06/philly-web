"use client";

import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventModal = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const eventModal = modalRef.current;

    const handleShow = (event: any) => {
      const button = event.relatedTarget;
      const tourType = button?.getAttribute("data-bs-type") || "Get Quote";

      const modalTitle = eventModal?.querySelector(".modal-title");
      if (modalTitle) {
        modalTitle.textContent = tourType;
      }
    };

    if (eventModal) {
      eventModal.addEventListener("show.bs.modal", handleShow);
    }

    return () => {
      if (eventModal) {
        eventModal.removeEventListener("show.bs.modal", handleShow);
      }
    };
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="eventModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="eventModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="modal-title">Get Quote</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>

              <form id="eventform" method="POST" encType="multipart/form-data">
                        <div className="form-group">
                            <label className="text-primary fw-bold mb-2" htmlFor="form34"> <i className="fas fa-user prefix text-secondary me-1"></i>Your name</label>

                            <input type="text" name="eventname" id="eventname" className="form-control validate form-control-dark" />
                        </div>

                        <div className="form-group">

                            <label className="text-primary fw-bold mb-2" htmlFor="form29"> <i className="fas fa-envelope prefix text-secondary me-1"></i>Your email</label>
                            <input type="email" name="eventemail" id="eventemail" className="form-control validate form-control-dark" />
                        </div>

                        <div className="form-group">
                            <label className="text-primary fw-bold mb-2" htmlFor="form32"> <i className="fas fa-phone prefix text-secondary me-1"></i>Your Mobile</label>
                            <div className="row g-2">
                                <div className="isd col-4">
                                    <select name="phonecode" id="phonecode" className="form-control form-select validate form-control-dark">
                                        <option value="">Choose Country Code</option>
                                        <option value="93" data-phonecode="93">93</option>
                                        <option value="+358-18" data-phonecode="+358-18">+358-18</option>
                                        <option value="355" data-phonecode="355">355</option>
                                        <option value="213" data-phonecode="213">213</option>
                                        <option value="+1-684" data-phonecode="+1-684">+1-684</option>
                                        <option value="376" data-phonecode="376">376</option>
                                        <option value="244" data-phonecode="244">244</option>
                                        <option value="+1-264" data-phonecode="+1-264">+1-264</option>
                                        <option value="" data-phonecode=""></option>
                                        <option value="+1-268" data-phonecode="+1-268">+1-268</option>
                                        <option value="54" data-phonecode="54">54</option>
                                        <option value="374" data-phonecode="374">374</option>
                                        <option value="297" data-phonecode="297">297</option>
                                        <option value="61" data-phonecode="61">61</option>
                                        <option value="43" data-phonecode="43">43</option>
                                        <option value="994" data-phonecode="994">994</option>
                                        <option value="+1-242" data-phonecode="+1-242">+1-242</option>
                                        <option value="973" data-phonecode="973">973</option>
                                        <option value="880" data-phonecode="880">880</option>
                                        <option value="+1-246" data-phonecode="+1-246">+1-246</option>
                                        <option value="375" data-phonecode="375">375</option>
                                        <option value="32" data-phonecode="32">32</option>
                                        <option value="501" data-phonecode="501">501</option>
                                        <option value="229" data-phonecode="229">229</option>
                                        <option value="+1-441" data-phonecode="+1-441">+1-441</option>
                                        <option value="975" data-phonecode="975">975</option>
                                        <option value="591" data-phonecode="591">591</option>
                                        <option value="599" data-phonecode="599">599</option>
                                        <option value="387" data-phonecode="387">387</option>
                                        <option value="267" data-phonecode="267">267</option>
                                        <option value="0055" data-phonecode="0055">0055</option>
                                        <option value="55" data-phonecode="55">55</option>
                                        <option value="246" data-phonecode="246">246</option>
                                        <option value="673" data-phonecode="673">673</option>
                                        <option value="359" data-phonecode="359">359</option>
                                        <option value="226" data-phonecode="226">226</option>
                                        <option value="257" data-phonecode="257">257</option>
                                        <option value="855" data-phonecode="855">855</option>
                                        <option value="237" data-phonecode="237">237</option>
                                        <option value="1" data-phonecode="1">1</option>
                                        <option value="238" data-phonecode="238">238</option>
                                        <option value="+1-345" data-phonecode="+1-345">+1-345</option>
                                        <option value="236" data-phonecode="236">236</option>
                                        <option value="235" data-phonecode="235">235</option>
                                        <option value="56" data-phonecode="56">56</option>
                                        <option value="86" data-phonecode="86">86</option>
                                        <option value="61" data-phonecode="61">61</option>
                                        <option value="61" data-phonecode="61">61</option>
                                        <option value="57" data-phonecode="57">57</option>
                                        <option value="269" data-phonecode="269">269</option>
                                        <option value="242" data-phonecode="242">242</option>
                                        <option value="243" data-phonecode="243">243</option>
                                        <option value="682" data-phonecode="682">682</option>
                                        <option value="506" data-phonecode="506">506</option>
                                        <option value="225" data-phonecode="225">225</option>
                                        <option value="385" data-phonecode="385">385</option>
                                        <option value="53" data-phonecode="53">53</option>
                                        <option value="599" data-phonecode="599">599</option>
                                        <option value="357" data-phonecode="357">357</option>
                                        <option value="420" data-phonecode="420">420</option>
                                        <option value="45" data-phonecode="45">45</option>
                                        <option value="253" data-phonecode="253">253</option>
                                        <option value="+1-767" data-phonecode="+1-767">+1-767</option>
                                        <option value="+1-809 and 1-829" data-phonecode="+1-809 and 1-829">+1-809 and 1-829</option>
                                        <option value="670" data-phonecode="670">670</option>
                                        <option value="593" data-phonecode="593">593</option>
                                        <option value="20" data-phonecode="20">20</option>
                                        <option value="503" data-phonecode="503">503</option>
                                        <option value="240" data-phonecode="240">240</option>
                                        <option value="291" data-phonecode="291">291</option>
                                        <option value="372" data-phonecode="372">372</option>
                                        <option value="251" data-phonecode="251">251</option>
                                        <option value="500" data-phonecode="500">500</option>
                                        <option value="298" data-phonecode="298">298</option>
                                        <option value="679" data-phonecode="679">679</option>
                                        <option value="358" data-phonecode="358">358</option>
                                        <option value="33" data-phonecode="33">33</option>
                                        <option value="594" data-phonecode="594">594</option>
                                        <option value="689" data-phonecode="689">689</option>
                                        <option value="" data-phonecode=""></option>
                                        <option value="241" data-phonecode="241">241</option>
                                        <option value="220" data-phonecode="220">220</option>
                                        <option value="995" data-phonecode="995">995</option>
                                        <option value="49" data-phonecode="49">49</option>
                                        <option value="233" data-phonecode="233">233</option>
                                        <option value="350" data-phonecode="350">350</option>
                                        <option value="30" data-phonecode="30">30</option>
                                        <option value="299" data-phonecode="299">299</option>
                                        <option value="+1-473" data-phonecode="+1-473">+1-473</option>
                                        <option value="590" data-phonecode="590">590</option>
                                        <option value="+1-671" data-phonecode="+1-671">+1-671</option>
                                        <option value="502" data-phonecode="502">502</option>
                                        <option value="+44-1481" data-phonecode="+44-1481">+44-1481</option>
                                        <option value="224" data-phonecode="224">224</option>
                                        <option value="245" data-phonecode="245">245</option>
                                        <option value="592" data-phonecode="592">592</option>
                                        <option value="509" data-phonecode="509">509</option>
                                        <option value="" data-phonecode=""></option>
                                        <option value="504" data-phonecode="504">504</option>
                                        <option value="852" data-phonecode="852">852</option>
                                        <option value="36" data-phonecode="36">36</option>
                                        <option value="354" data-phonecode="354">354</option>
                                        <option value="91" data-phonecode="91">91</option>
                                        <option value="62" data-phonecode="62">62</option>
                                        <option value="98" data-phonecode="98">98</option>
                                        <option value="964" data-phonecode="964">964</option>
                                        <option value="353" data-phonecode="353">353</option>
                                        <option value="972" data-phonecode="972">972</option>
                                        <option value="39" data-phonecode="39">39</option>
                                        <option value="+1-876" data-phonecode="+1-876">+1-876</option>
                                        <option value="81" data-phonecode="81">81</option>
                                        <option value="+44-1534" data-phonecode="+44-1534">+44-1534</option>
                                        <option value="962" data-phonecode="962">962</option>
                                        <option value="7" data-phonecode="7">7</option>
                                        <option value="254" data-phonecode="254">254</option>
                                        <option value="686" data-phonecode="686">686</option>
                                        <option value="850" data-phonecode="850">850</option>
                                        <option value="82" data-phonecode="82">82</option>
                                        <option value="383" data-phonecode="383">383</option>
                                        <option value="965" data-phonecode="965">965</option>
                                        <option value="996" data-phonecode="996">996</option>
                                        <option value="856" data-phonecode="856">856</option>
                                        <option value="371" data-phonecode="371">371</option>
                                        <option value="961" data-phonecode="961">961</option>
                                        <option value="266" data-phonecode="266">266</option>
                                        <option value="231" data-phonecode="231">231</option>
                                        <option value="218" data-phonecode="218">218</option>
                                        <option value="423" data-phonecode="423">423</option>
                                        <option value="370" data-phonecode="370">370</option>
                                        <option value="352" data-phonecode="352">352</option>
                                        <option value="853" data-phonecode="853">853</option>
                                        <option value="389" data-phonecode="389">389</option>
                                        <option value="261" data-phonecode="261">261</option>
                                        <option value="265" data-phonecode="265">265</option>
                                        <option value="60" data-phonecode="60">60</option>
                                        <option value="960" data-phonecode="960">960</option>
                                        <option value="223" data-phonecode="223">223</option>
                                        <option value="356" data-phonecode="356">356</option>
                                        <option value="+44-1624" data-phonecode="+44-1624">+44-1624</option>
                                        <option value="692" data-phonecode="692">692</option>
                                        <option value="596" data-phonecode="596">596</option>
                                        <option value="222" data-phonecode="222">222</option>
                                        <option value="230" data-phonecode="230">230</option>
                                        <option value="262" data-phonecode="262">262</option>
                                        <option value="52" data-phonecode="52">52</option>
                                        <option value="691" data-phonecode="691">691</option>
                                        <option value="373" data-phonecode="373">373</option>
                                        <option value="377" data-phonecode="377">377</option>
                                        <option value="976" data-phonecode="976">976</option>
                                        <option value="382" data-phonecode="382">382</option>
                                        <option value="+1-664" data-phonecode="+1-664">+1-664</option>
                                        <option value="212" data-phonecode="212">212</option>
                                        <option value="258" data-phonecode="258">258</option>
                                        <option value="95" data-phonecode="95">95</option>
                                        <option value="264" data-phonecode="264">264</option>
                                        <option value="674" data-phonecode="674">674</option>
                                        <option value="977" data-phonecode="977">977</option>
                                        <option value="31" data-phonecode="31">31</option>
                                        <option value="687" data-phonecode="687">687</option>
                                        <option value="64" data-phonecode="64">64</option>
                                        <option value="505" data-phonecode="505">505</option>
                                        <option value="227" data-phonecode="227">227</option>
                                        <option value="234" data-phonecode="234">234</option>
                                        <option value="683" data-phonecode="683">683</option>
                                        <option value="672" data-phonecode="672">672</option>
                                        <option value="+1-670" data-phonecode="+1-670">+1-670</option>
                                        <option value="47" data-phonecode="47">47</option>
                                        <option value="968" data-phonecode="968">968</option>
                                        <option value="92" data-phonecode="92">92</option>
                                        <option value="680" data-phonecode="680">680</option>
                                        <option value="970" data-phonecode="970">970</option>
                                        <option value="507" data-phonecode="507">507</option>
                                        <option value="675" data-phonecode="675">675</option>
                                        <option value="595" data-phonecode="595">595</option>
                                        <option value="51" data-phonecode="51">51</option>
                                        <option value="63" data-phonecode="63">63</option>
                                        <option value="870" data-phonecode="870">870</option>
                                        <option value="48" data-phonecode="48">48</option>
                                        <option value="351" data-phonecode="351">351</option>
                                        <option value="+1-787 and 1-939" data-phonecode="+1-787 and 1-939">+1-787 and 1-939</option>
                                        <option value="974" data-phonecode="974">974</option>
                                        <option value="262" data-phonecode="262">262</option>
                                        <option value="40" data-phonecode="40">40</option>
                                        <option value="7" data-phonecode="7">7</option>
                                        <option value="250" data-phonecode="250">250</option>
                                        <option value="290" data-phonecode="290">290</option>
                                        <option value="+1-869" data-phonecode="+1-869">+1-869</option>
                                        <option value="+1-758" data-phonecode="+1-758">+1-758</option>
                                        <option value="508" data-phonecode="508">508</option>
                                        <option value="+1-784" data-phonecode="+1-784">+1-784</option>
                                        <option value="590" data-phonecode="590">590</option>
                                        <option value="590" data-phonecode="590">590</option>
                                        <option value="685" data-phonecode="685">685</option>
                                        <option value="378" data-phonecode="378">378</option>
                                        <option value="239" data-phonecode="239">239</option>
                                        <option value="966" data-phonecode="966">966</option>
                                        <option value="221" data-phonecode="221">221</option>
                                        <option value="381" data-phonecode="381">381</option>
                                        <option value="248" data-phonecode="248">248</option>
                                        <option value="232" data-phonecode="232">232</option>
                                        <option value="65" data-phonecode="65">65</option>
                                        <option value="1721" data-phonecode="1721">1721</option>
                                        <option value="421" data-phonecode="421">421</option>
                                        <option value="386" data-phonecode="386">386</option>
                                        <option value="677" data-phonecode="677">677</option>
                                        <option value="252" data-phonecode="252">252</option>
                                        <option value="27" data-phonecode="27">27</option>
                                        <option value="" data-phonecode=""></option>
                                        <option value="211" data-phonecode="211">211</option>
                                        <option value="34" data-phonecode="34">34</option>
                                        <option value="94" data-phonecode="94">94</option>
                                        <option value="249" data-phonecode="249">249</option>
                                        <option value="597" data-phonecode="597">597</option>
                                        <option value="47" data-phonecode="47">47</option>
                                        <option value="268" data-phonecode="268">268</option>
                                        <option value="46" data-phonecode="46">46</option>
                                        <option value="41" data-phonecode="41">41</option>
                                        <option value="963" data-phonecode="963">963</option>
                                        <option value="886" data-phonecode="886">886</option>
                                        <option value="992" data-phonecode="992">992</option>
                                        <option value="255" data-phonecode="255">255</option>
                                        <option value="66" data-phonecode="66">66</option>
                                        <option value="228" data-phonecode="228">228</option>
                                        <option value="690" data-phonecode="690">690</option>
                                        <option value="676" data-phonecode="676">676</option>
                                        <option value="+1-868" data-phonecode="+1-868">+1-868</option>
                                        <option value="216" data-phonecode="216">216</option>
                                        <option value="90" data-phonecode="90">90</option>
                                        <option value="993" data-phonecode="993">993</option>
                                        <option value="+1-649" data-phonecode="+1-649">+1-649</option>
                                        <option value="688" data-phonecode="688">688</option>
                                        <option value="256" data-phonecode="256">256</option>
                                        <option value="380" data-phonecode="380">380</option>
                                        <option value="971" data-phonecode="971">971</option>
                                        <option value="44" data-phonecode="44">44</option>
                                        <option value="1" data-phonecode="1">1</option>
                                        <option value="1" data-phonecode="1">1</option>
                                        <option value="598" data-phonecode="598">598</option>
                                        <option value="998" data-phonecode="998">998</option>
                                        <option value="678" data-phonecode="678">678</option>
                                        <option value="379" data-phonecode="379">379</option>
                                        <option value="58" data-phonecode="58">58</option>
                                        <option value="84" data-phonecode="84">84</option>
                                        <option value="+1-284" data-phonecode="+1-284">+1-284</option>
                                        <option value="+1-340" data-phonecode="+1-340">+1-340</option>
                                        <option value="681" data-phonecode="681">681</option>
                                        <option value="212" data-phonecode="212">212</option>
                                        <option value="967" data-phonecode="967">967</option>
                                        <option value="260" data-phonecode="260">260</option>
                                        <option value="263" data-phonecode="263">263</option>
                                </select>
                                    {/* <input type="text" id="countrycode" className="form-control shadow-sm" name="countrycode" readOnly /> */}
                                </div>
                                <div className="col"><input type="text" id="eventmobile" name="eventmobile" className="form-control validate form-control-dark" /></div>
                            </div>
                        </div>
                        <div className="form-group">

                            <label className="text-primary fw-bold mb-2" htmlFor="form32"> <i className="fas fa-tag prefix text-secondary me-1"></i>No of guest</label>
                            <input type="number" name="eventguest" id="eventguest" className="form-control validate form-control-dark" />
                        </div>
                        <div className="form-group">
                            <label className="text-primary fw-bold mb-2" htmlFor="form32"> <i className="fas fa-tag prefix text-secondary me-1"></i>Event Date</label>
                            <input type="date" name="eventdate" id="eventdate" className="form-control validate form-control-dark" />
                        </div>
                        <div className="form-group">
                            <label className="text-primary fw-bold mb-2" htmlFor="form32"> <i className="fas fa-tag prefix text-secondary me-1"></i>Event Time</label>
                            <input type="time" name="evtime" id="evtime" className="form-control validate form-control-dark" />
                        </div>
                        <div className="form-group">
                            <label className="text-primary fw-bold mb-2" htmlFor="form32"> <i className="fas fa-envelope prefix text-secondary me-1"></i>Message</label>
                            <textarea name="evmessage" id="evmessage" className="form-control validate form-control-dark"></textarea>
                        </div>
                        <div className="readmore">
                            <input type="hidden" name="eventids" id="eventids" value="3" />
                            <input type="hidden" name="eventbtn" id="eventbtn" value="active" />
                            <button type="submit" className="button w-100">Send <i className="fas fa-paper-plane"></i></button>
                        </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventModal;
