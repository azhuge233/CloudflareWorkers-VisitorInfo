export default {
  async fetch(request) {
    const data = {
      Method: request.method,
      Url: request.url,
      CF: {
        Colo: request.cf.colo,
        Continent: request.cf.continent,
        Country: request.cf.country,
        IsEU: request.cf.isEUCountry,
        City: request.cf.city,
        Latitude: request.cf.latitude,
        Longitude: request.cf.longitude,
        PostalCode: request.cf.postalCode,
        MetroCode: request.cf.metroCode,
        Region: request.cf.region,
        RegionCode: request.cf.regionCode,
        ASN: request.cf.asn,
        ASOrganization: request.cf.asOrganization,
        Timezone: request.cf.timezone,
        HttpProtocol: request.cf.httpProtocol,
        TLSVersion: request.cf.tlsVersion
      },
      Headers: {
        XRealIP: request.headers.get('x-real-ip'),
        IP: request.headers.get('CF-Connecting-IP'),
        IPv6: request.headers.get('CF-Connecting-IPv6'),
        Authorization: request.headers.get('Authorization'),
        From: request.headers.get('From'),
        UA: request.headers.get('User-Agent'),
        Referer: request.headers.get('Referer'),
        Cookie: request.headers.get('Cookie'),
        Accept: request.headers.get('Accept'),
        XFF: request.headers.get('X-Forwarded-For'),
        XHF: request.headers.get('X-Forwarded-Host'),
        XFP: request.headers.get('X-Forwarded-Proto')
      }
    };
  
    var dataJson = JSON.stringify(data, null, 4);
  
    console.log(dataJson);
  
    return new Response(dataJson, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    })
  }
};
