import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  baseURL = 'https://org1d2d3399.api.crm.dynamics.com/api/data/v9.2/';
  tokenURL =
    'https://login.microsoftonline.com/e55fe08a-e4e3-4627-ad40-d9961c612aaa/oauth2/v2.0/token';
  JWT =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL29yZzFkMmQzMzk5LmFwaS5jcm0uZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTU1ZmUwOGEtZTRlMy00NjI3LWFkNDAtZDk5NjFjNjEyYWFhLyIsImlhdCI6MTcwNjAwNjA5MiwibmJmIjoxNzA2MDA2MDkyLCJleHAiOjE3MDYwMDk5OTIsImFpbyI6IkUyVmdZSWhUeWQ1dzY5VDVvUE9WWWh5cnp6VE1BUUE9IiwiYXBwaWQiOiJhNTA4MGY1OS1jMmE0LTQ0MjAtOTkwMC1kMjAzY2UyMDM4MDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lNTVmZTA4YS1lNGUzLTQ2MjctYWQ0MC1kOTk2MWM2MTJhYWEvIiwib2lkIjoiNWU4MWQxODMtMDExNC00MzE2LWFkZTgtMmI4NjVhYzRhMTBkIiwicmgiOiIwLkFTZ0FpdUJmNWVQa0owYXRRTm1XSEdFcXFnY0FBQUFBQUFBQXdBQUFBQUFBQUFEWkFBQS4iLCJzdWIiOiI1ZTgxZDE4My0wMTE0LTQzMTYtYWRlOC0yYjg2NWFjNGExMGQiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiTkEiLCJ0aWQiOiJlNTVmZTA4YS1lNGUzLTQ2MjctYWQ0MC1kOTk2MWM2MTJhYWEiLCJ1dGkiOiJjYWdvQUZvYktrQ1R0TS0ycDRFSUFBIiwidmVyIjoiMS4wIiwieG1zX2NhZSI6IjEifQ.jlsY8ONx2FTn1BcDXtfH1DCMQDX0ysCKiAtUZUfc5qQC-evawjXqjah-vmwgsnO69g-vxCuUaBiKuxuiRkVuEuHFJy4KzrNWaRp8sK7j5P6Ipl2CzINrCDtH4sMyb_uVlsdLR_ZhqGGMedJyRt59ZSdUDL36eVbQCespBnG-FGpNOxP_VT86OSu1l9cCenyGcwf1kxmAK7--tqc4U2HeYq_3UOBMi4bureqGEjLjq1DosYUTnXZ_wzhBdh3AmN3inp0-UMHqtKM_PhJBI2wSmsV7Y3xs_AEimSrHGAnb4PE69rl2tA1tabPUi3x6HQ5AuHT2U0seJk8001Lcycuysg';
  headers = {
    'Content-Type': 'application/json',
    Authorization: this.JWT,
  };
  cartLength: number = 0;
  cartItems: any[] = [];

  constructor(private http: HttpClient) {}

  hasTokenExpired(token: string) {
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  // genToken(){

  // }

  getCartItems() {
    return this.http.get(
      this.baseURL + 'coveo_commercecarts?$select=coveo_name,coveo_cartinfo',
      {
        headers: this.headers,
      }
    );
  }

  addItemToCart(postData: any) {
    return this.http.post(this.baseURL + 'coveo_commercecarts', postData, {
      headers: this.headers,
    });
  }

  removeItemToCart(id: string) {
    return this.http.delete(this.baseURL + `coveo_commercecarts(${id})`, {
      headers: this.headers,
    });
  }

  quantityChanger(data: any, type: string) {
    if (type === 'INCREASE') {
      data.quantity = data.quantity + 1;
    } else if (type === 'DECREASE') {
      data.quantity = data.quantity - 1;
    }

    const updatedQty = JSON.stringify({
      value: JSON.stringify(data).replace(/"/g, "'"),
    });

    return this.http.put(
      this.baseURL + `coveo_commercecarts(${data.id})/coveo_cartinfo`,
      updatedQty,
      {
        headers: this.headers,
      }
    );
  }

  subtotal() {
    let total = 0;

    for (let item of this.cartItems) {
      total += item.quantity * item.price;
    }

    return total;
  }
}
