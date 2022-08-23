module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      credentials: true,
      headers: 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,Scnt-Current-Page-Url,X-Tenant-Id,X-CSRF-Token',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      keepHeaderOnError: true,
      origin: [
        'https://scentbird.com',
        'https://test.scentbird.com',
        'https://local.scentbird.com',
        'https://preprod.scentbird.com',
        'https://strapibird.geas.al',
      ],
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
