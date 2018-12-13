import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {sha256, sha224} from 'js-sha256';
import jsrsasign from 'jsrsasign'

@Injectable()
export class CardMerchantService {
    constructor(private http: HttpClient) {
    }

    // private privateKey = `-----BEGIN PRIVATE KEY-----
    //         MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCEUh3NSfhxYPW85XlPlL5AM9byqdjirN1rthTJ7VtsqPLLruKcI64j9G2Pmu4GXPpAVAIHNgp9tPwiE4whv/8Q2VjRPQsCCzzZ5axy/G1rmWBeVlZ5423TPP9jFsJGVdGDZ7UKMGKvtMvR9nybBUL/2Ve1j3cELZStP3FL3vYyRoYoirCiyfxP0Jqq1PVxNODfDqA7CyEtrfMO2MxWnm7XxvA8Mk68cJ/V6816PsewWhY2DxK1To9XEmlEEqZT3taWb2Us/Ru6SKQxg5unaX8LOx4kw6t7qjA709O8YDXh+Q4y4DQT8qmbICLFnoSm+kyRuj+FsjjiW+MdfE07HB9jAgMBAAECggEADu7Fdjl21DTBBsRO4HBE2DIBe/k3BL3FbzZpOjCTNLwMSng+EqjkKiKXirFNU2KCy2evouiyXmViXuYd1mE4g8pDf7mH2H80KtMElyVto8r3WS4dLDxCVKh5mdEjs5RTxKSbhb7YJEQfDF7oyQXa/cylXVQHdm0+bh7OxmUvG5U2+0ib/EtsPo+yjQDRjPChZ3KNtCZA7Ei+d+sQl3OSCAsqWiKas79488971fCjNjRRi+7a9mfhNJZr6LulT9cPdEgj1GN8saEG2FdVw5dyqRv5mq4VcmyINAAe4VcksVu0l+nngNeYU7lvaXI4c4/+b3v3jS7qTaSlq+HV8y5u4QKBgQDt9P1t0EZmoyI+Ow+YaCnqnF9ztRA7o5j1Si9Q9vl8nir9J6NdxPUa4GeRD1SYXgdcOasqoxjHHGgN00KrP7yVzzyMWrVoRCw109FXbq0vQzj/ot0C7QSwGHQfjrd90u24zBJC4+QjULkHWamqv2z+F6v8ZGVoZVpR7/gnW4NpdwKBgQCOWpwZzxK6BOC4NPM90o4ibKMWsVFBG4njk9+ZeCUaQFoZ8M3ok/9w6HyiIagaURfke3n1dRsS+kwxGm7assnOTNHtBGx9+tQA8MvyJ/DYjcRGbbKYeqQGa1u6OD/6XEmR6ze9losXjTb0jhkPbJcRTGvj1Z6FAxCupmcl1pV0dQKBgDAMJNP0lxKIZBSutkJu3e/abUeeys1QBkWZGh6+D7hC86k0RL9dUqR/pUncD5fIfLH5jv9H+WvS54vLGY4ci4awVqh8dF6+TTL9NyrxVRTS/QJZL0k09JpeBayNk61bVtbWleVdwKYE2aeLSkAI8QgJXZfT6cn/lRIwYyoHR2yXAoGAPm9vV8KCrCPHjANtTAg1XtPXE/ThdnTlnXMV9vHDFCh1XDtJlGCVAKh3QYURfbljiUq+yvF51nEBSegWBsWzzU/UIuh1zSteIKt8R9FMyS4kj989HbNsjYQ4zwwsw1oGyoEoCXclukate8V3KFSwTV3/VAY1aJFXl8JUKzxagKECgYEAlkUie7XeH+XMD5Als5fRiOGBkUL7VEubXF5gwtZ46ztwmL4d670F+SPz9bSVOjzU6TC+MJzUW4b/etlNxWszb9VkhtaQe/hKedyenSjxy/Bk2f7QRggWUprWaJ695t9n67+4p4gZ1geeIp6NeJY/NMbGJHdX3CTNqTtPq+Kyi7I=
    //         -----END PRIVATE KEY-----`;
    // private publicKey='MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhFIdzUn4cWD1vOV5T5S+QDPW8qnY4qzda7YUye1bbKjyy67inCOuI/Rtj5ruBlz6QFQCBzYKfbT8IhOMIb//ENlY0T0LAgs82eWscvxta5lgXlZWeeNt0zz/YxbCRlXRg2e1CjBir7TL0fZ8mwVC/9lXtY93BC2UrT9xS972MkaGKIqwosn8T9CaqtT1cTTg3w6gOwshLa3zDtjMVp5u18bwPDJOvHCf1evNej7HsFoWNg8StU6PVxJpRBKmU97Wlm9lLP0bukikMYObp2l/CzseJMOre6owO9PTvGA14fkOMuA0E/KpmyAixZ6EpvpMkbo/hbI44lvjHXxNOxwfYwIDAQAB';


    private privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0pcQCVbdsz4fh9k/fgDX3NnY274S1QIF9qaOMUm7jyQ++kbzylL1tXtVHBqvGeu3fcbBEWhVqg6BDTqwTuUxuEOHJN1f7lT3dtBrw28wrbARVFvGfyNjwy+0u5BdnwSyfhmoPbtKU+JgUxT53KPM9VpL3Sobe9SzJYoLnNUut4pA1eGV3bRqYGcED4JAJ1Fsdj6SQl2DPiHWfQSZZWCwUSwrQk83WhHj0aI18wp5x7XyTaIC8yiG7LN4rRVNlYvJIBbrTf7N86YEovv9oGw4ES9UybSGVzZcwX1rmP5JcbWpE+9JF75E/60vHEupzQdutHgygQeXBzzA6ilTLKGLzAgMBAAECggEBAKNXB4Z87t+qPtloGAylJyaizf0aUcp5yxxO2Ry2JKI+WMgditVk/Gr6Rqp0M7nByXgymgkT0y1+WtjBOAKVl7Al/6IrMpi+9zOR+JI0i8XvY3N0zYGG3/HK0mmFwEwGdUzBAwF1WV9t8EVHnBWup1GdCEIl1xGeaqKlOmvI2ucb4dNYMkUR/ANs9r0VXU7OiwhiphCv49zdXYnK5gDo5fUOEA4QdB5vrL4Zp2IfasKjBF5yQVliVCesi3CeaBvy2VD+wCmXWYeLzZf9wkQzc82Uss2P19ROU8brMyw8IdEImI9+iZup03ssHiTgFGwB0hsHljhOrv/91HeHtPRoEKECgYEA3yxVz5XegRAcsY30AnccjtDGL1NiIk2UjiVFd6gLxb0votnzr0JtRncsBUWglGO8etCNO1aDWGAJSQVF+jzxns6vMM91E5C4E1QjzNOn71QElBeAkPWD7VVEN24Z/rGmVQuRrgkF5HPuNeBxrHSVlR4I5+YkygUMrUg3igRsy3sCgYEAzzgcl0IO4m5U4xxBeccYbAJ9yz8Q2W52vaK+4d6Ea0G49rUR+GkznkszDli2wkoyzu7rNFhpEGvoFNzTDAIcVfRSdu/RIv+9dJ9gek+UesejpGNuAZQfJ0exDdHIdhqfgQTRK8V0wEawiVaNx2QBBJ87gB+STFOqaXyZo7aqkOkCgYAVW6jatP0WXPRiCbPQiJWzFUfiP5ikr8gH0olTakG2KuTkMPehTjonBECyQHedu+3N0yexBhaL3qUE1/xadnqpOB6MDU6nELKNJwBGGft4bBIEGjuzo8t8ayycIW1bcqT4fqLyhOqLcozZmyFF3+Jw4u73Qo9CxjjwXHj0PHgtAQKBgQCTyRz6823SJ4X7A2ffBhNw1MYKckv+Bj5BORSR2jTumczkhnbuh3j85/zdun99SZW658Jvbq5fu9WlK2iJI+g5lSpLEPZC08m2pwQTtzXZ6w/WaeNG1PDy/rpTdM5XDN29EkZrxUNi7gdxq30qOzROq5Gv6tRYA0OCQA8DJ3+2IQKBgHKV19SGfgXekKMZYmp72Xnxi5fJMXafaJ0z5JOWswr0Pm/7VhvTXpOV6MCxYE0jg8eGvYe+E/Uh55FCWlpHJBk79xjBvpZcvFlz922l5R+5wqEx/6mAi+9iZgyCRO5Xw9tPw6Xp9z6GT1vl3fzL+Q1F2tSB6GpCjgwxB82Q+kDc
-----END PRIVATE KEY-----
`;
    private publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtKXEAlW3bM+H4fZP34A19zZ2Nu+EtUCBfamjjFJu48kPvpG88pS9bV7VRwarxnrt33GwRFoVaoOgQ06sE7lMbhDhyTdX+5U93bQa8NvMK2wEVRbxn8jY8MvtLuQXZ8Esn4ZqD27SlPiYFMU+dyjzPVaS90qG3vUsyWKC5zVLreKQNXhld20amBnBA+CQCdRbHY+kkJdgz4h1n0EmWVgsFEsK0JPN1oR49GiNfMKece18k2iAvMohuyzeK0VTZWLySAW603+zfOmBKL7/aBsOBEvVMm0hlc2XMF9a5j+SXG1qRPvSRe+RP+tLxxLqc0HbrR4MoEHlwc8wOopUyyhi8wIDAQAB';

    private httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
        //headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
        //headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };


    //private gwUrl = 'http://202.175.59.29:10443/gwinternet/cardmerchant-svc/';
    private gwUrl = 'http://202.175.59.29:10443/gwinternet/mere-main-svc/';

    getSignInit(str: any): any {

        let rsa = jsrsasign.KEYUTIL.getKey(this.privateKey);
        let sig = new jsrsasign.KJUR.crypto.Signature({"alg": "SHA256withRSA"});
        sig.init(rsa);

        sig.updateString(str);

        let sign = jsrsasign.hextob64(sig.sign());
        sign = encodeURIComponent(sign);
        return sign;
    }

    checkLoginSession(sessionid) {
        let str = "sessionId=" + sessionid;

        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);

        let url = this.gwUrl + 'cardmerchant/getsessionContent' + '?' + str + '&'
            + 'sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.get(url);
    }


    scancoupon(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/eshopgetproductcode' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }


    addUser(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/addseconduser' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }

    deleteseconduser(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/deleteseconduser' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }

    //审批
    approverequest(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/approverequest' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }

    //否決
    deleterequest(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/deleterequest' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }

    getShopList(data) {
        let str = "merchantId=" + data.merchantId + "&sessionId=" + data.sessionId;
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getMerchantInfoByMerchantId?' + str + '&sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.get(url);
    }

    getrequestlist(data) {
        let str = "field1=" + data.field1 + "&sessionid=" + data.sessionid;
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getrequestlist?' + str + '&sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.get(url);
    }

    addrefund(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/addrefund' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }

    addwechatrefund(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/addwechatrefund' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }

    addmachinerequest(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/addmachinerequest' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }


    sendVerifyCode_rsa(mobile: any) {

        let data = {
            "mobile": mobile
        };

        let str = JSON.stringify(data);
        //console.log("str:" ,str);

        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);

        let url = this.gwUrl + 'cardmerchant/sendverifycode'
            + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data, this.httpOptions);
    }

    checkVerifyCode_rsa(mobile: any, verifycode: any) {

        let data = {
            "mobile": mobile,
            "verifycode": verifycode
        };

        let str = JSON.stringify(data);
        //console.log("str:" ,str);

        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);

        let url = this.gwUrl + 'cardmerchant/checkverifycode'
            + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data, this.httpOptions);
    }

    getSecondUsers(sessionid: any) {

        let str = "sessionId=" + sessionid;

        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);

        let url = this.gwUrl + 'cardmerchant/getseconduser' + '?' + str + '&'
            + 'sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.get(url);
    }

    addCounterPoints(data: any) {
        let url = this.gwUrl + 'cardmerchant/addcounterpoints?sessionid=' + localStorage.getItem("SESSIONID");
        //console.log(url);
        return this.http.post(url, data, this.httpOptions);
    }

    newPointsToMoney(cardno: any, points: any) {
        let data = {
            "cardno": cardno,
            "points": points,
            "sessionid": localStorage.getItem("SESSIONID")
        };

        let str = JSON.stringify(data);
        //console.log("str:" ,str);

        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);

        let url = this.gwUrl + 'cardmerchant/newpointstomoney'
            + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data, this.httpOptions);
    }

    getTrxInfoByMerchantId(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/gettrxinfobymerchantid' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }

    getWeChatTrxList156() {

        let str = "sessionid=" + localStorage.getItem("SESSIONID");

        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);

        let url = this.gwUrl + 'cardmerchant/getwechattrxlist156' + '?' + str + '&'
            + 'sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.get(url);
    }

    getPictures(requestId: any) {

        let str = "requestid=" + requestId + "&sessionid=" + localStorage.getItem("SESSIONID");

        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);

        let url = this.gwUrl + 'cardmerchant/getpictures' + '?' + str + '&'
            + 'sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.get(url);
    }

    addPicture(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/addpictures' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }

    //调单
    uploadForRequest(data) {
        let str = JSON.stringify(data);
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/uploadforrequest' + '?sign=' + sign + '&merCert=' + merCert;
        //console.log(url);

        return this.http.post(url, data);
    }

    getRecordByDepartmentIdTransactionRef(trxRef) {
        let str = "sessionId=" + localStorage.getItem('SESSIONID') + "&trxRef=" + trxRef;
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/inqbytrxref?' + str + '&sign=' + sign + '&merCert=' + merCert;
        //console.log(url);
        return this.http.get(url);
    }

    // scanEshopCode() {
    //     let url = this.gwUrl + 'cardmerchant/eshopgetproductcode';
    //     //console.log(url);
    //     let data = {
    //         comment: "1234"
    //     }
    //
    //     return this.http.post(url, data);
    // }
}