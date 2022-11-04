import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="Tebama-Contact">
      <h2>
        Request
        <span> a quick quote </span>
      </h2>
      <form>
        <div className="wrapper">
          <div>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input
              type="tel"
              name="your-phone"
              aria-required="true"
              aria-invalid="false"
              placeholder="Phone No"
            />
            <input type="text" placeholder="Departure Date and Time" />
          </div>
          <div>
            <select
              name="freight-type"
              aria-required="true"
              aria-invalid="false"
            >
              <option value="Freight Type">Freight Type</option>
              <option value="Air">Air</option>
              <option value="Land">Land</option>
              <option value="Sea">Sea</option>
            </select>

            <select
              name="city-of-departure"
              aria-required="true"
              aria-invalid="false"
            >
              <option value="City of Departure">City of Departure</option>
              <option value="Sydney">Sydney</option>
              <option value="Brisbane">Brisbane</option>
              <option value="Perth">Perth</option>
              <option value="Newcastle">Newcastle</option>
              <option value="Canberra">Canberra</option>
              <option value="Hobart">Hobart</option>
            </select>
            <select name="delivery" aria-required="true" aria-invalid="false">
              <option value="Delivery City">Delivery City</option>
              <option value="Sydney">Sydney</option>
              <option value="Brisbane">Brisbane</option>
              <option value="Perth">Perth</option>
              <option value="Newcastle">Newcastle</option>
              <option value="Canberra">Canberra</option>
              <option value="Hobart">Hobart</option>
            </select>
            <select
              name="total-weight-in-kg"
              aria-required="true"
              aria-invalid="false"
            >
              <option value="Total Gross Area weight(KG)">
                Total Gross Area weight(KG)
              </option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="10000">10000</option>
              <option value="100000">100000</option>
            </select>
          </div>
          <textarea
            name="your-message"
            aria-invalid="false"
            placeholder="Messagae"
          ></textarea>
        </div>
      </form>
    </section>
  );
}
