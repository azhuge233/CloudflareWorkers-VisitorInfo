export default {
  async fetch(request) {
    const data = {
      Method: request.method,
      Url: request.url,
      CF: {
        ASN: request.cf.asn,
        ASOrganization: request.cf.asOrganization,
        BotScore: request.cf.botManagement.score,
        BotVerified: request.cf.botManagement.verified_bot || "null",
        BotVerifiedCategory: request.cf.botManagement.verifiedBotCategory || "null",
        BotJSPassed: request.cf.botManagement.jsDetection.passed,
        Colo: request.cf.colo,
        City: request.cf.city,
        Country: request.cf.country,
        Continent: request.cf.continent,
        IsEU: request.cf.isEUCountry,
        Latitude: request.cf.latitude,
        Longitude: request.cf.longitude,
        Region: request.cf.region,
        RegionCode: request.cf.regionCode,
        PostalCode: request.cf.postalCode,
        MetroCode: request.cf.metroCode,
        Timezone: request.cf.timezone,
        HttpProtocol: request.cf.httpProtocol,
        TLSCipher: request.cf.tlsCipher,
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
