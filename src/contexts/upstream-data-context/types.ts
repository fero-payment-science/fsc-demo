export interface UpstreamResponseObject {
  // atdata
  eam: {
    velocity: number;
    longevity: number;
    popularity: number;
    date_first_seen: string;
  };
  email_validation: {
    status: string;
    address: string;
    domain_typ: string;
    status_code: number;
  };
  risk: {
    ip: {
      latitude: number;
      longitude: 4.94019;
      proxy_type: string;
      organization: string;
      routing_type: string;
      hosting_facility: boolean;
    };
    score: number;
  };
  // ekata
  alerts: string[];
  warnings: string[];
  'ip.risk': boolean;
  'ip.risk_score': number;
  'ip.last_seen_days': number;
  'identity.risk_score': number;
  'ip.connection_type': string;
  'ip.geolocation_country_code': string;
  'ip.primary_address_distance': number;
  'primary.email.last_seen_days': number;
  'ip.secondary_address_distance': number;
  'primary.email.valid': boolean | null;
  'primary.email.first_seen_days': number;
  'primary.address.validity_level': string;
  'primary.address.first_seen_days': number;
  'primary.phone.ip.last_seen_days': number;
  'secondary.email.first_seen_days': number;
  'secondary.address.validity_level': string;
  'secondary.address.first_seen_days': number;
  'secondary.phone.ip.last_seen_days': number;
  'primary.email.domain_creation_date': string;
  // seon
  ip_details: {
    id: string;
    ip: string;
    tor: boolean;
    vpn: boolean;
    city: string;
    type: string;
    flags: [];
    score: number;
    country: string;
    harmful: boolean;
    history: {
      hits: number;
      last_seen: number;
      first_seen: number;
      customer_hits: number;
    };
    isp_name: string;
    latitude: number;
    longitude: number;
    spam_urls: string[];
    web_proxy: boolean;
    open_ports: string[];
    state_prov: string;
    spam_number: number;
    public_proxy: boolean;
    timezone_offset: string;
  };
  email_details: {
    id: string;
    email: string;
    flags: string[];
    score: number;
    history: {
      hits: number;
      last_seen: number;
      first_seen: number;
      customer_hits: number;
    };
    deliverable: boolean;
    breach_details: {
      breaches: Breach[];
      first_breach: string;
      number_of_breaches: number;
      haveibeenpwned_listed: boolean;
    };
    domain_details: {
      tld: string;
      free: boolean;
      custom: boolean;
      domain: string;
      created: string;
      expires: string;
      updated: string;
      valid_mx: boolean;
      accept_all: boolean;
      disposable: boolean;
      registered: Registered;
      spf_strict: boolean;
      registered_to: string;
      dmarc_enforced: boolean;
      registrar_name: string;
      suspicious_tld: boolean;
      website_exists: boolean;
    };
    account_details: {
      ok: {
        age: number | null;
        city: string | null;
        registered: Registered;
        date_joined: string | null;
      };
      ebay: {
        registered: Registered;
      };
      jdid: {
        registered: Registered;
      };
      zoho: {
        registered: Registered;
      };
      adobe: {
        registered: Registered;
      };
      apple: {
        registered: Registered;
      };
      imgur: {
        registered: Registered;
      };
      kakao: {
        registered: Registered;
      };
      quora: {
        registered: Registered;
      };
      qzone: {
        registered: Registered;
      };
      skype: {
        registered: Registered;
      };
      vimeo: {
        registered: Registered;
      };
      weibo: {
        registered: Registered;
      };
      yahoo: {
        registered: Registered;
      };
      airbnb: {
        registered: Registered;
      };
      amazon: {
        registered: Registered;
      };
      envato: {
        registered: Registered;
      };
      flickr: {
        registered: Registered;
      };
      github: {
        registered: Registered;
      };
      google: {
        registered: Registered;
      };
      lastfm: {
        registered: Registered;
      };
      lazada: {
        registered: Registered;
      };
      mailru: {
        registered: Registered;
      };
      tumblr: {
        registered: Registered;
      };
      booking: {
        registered: Registered;
      };
      discord: {
        registered: Registered;
      };
      myspace: {
        registered: Registered;
      };
      netflix: {
        registered: Registered;
      };
      patreon: {
        registered: Registered;
      };
      rambler: {
        registered: Registered;
      };
      samsung: {
        registered: Registered;
      };
      spotify: {
        registered: Registered;
      };
      twitter: {
        registered: Registered;
      };
      evernote: {
        registered: Registered;
      };
      facebook: {
        registered: Registered;
      };
      flipkart: {
        registered: Registered;
      };
      gravatar: {
        name: string;
        username: string;
        registered: Registered;
        profile_url: string;
      };
      linkedin: {
        registered: Registered;
      };
      atlassian: {
        registered: Registered;
      };
      bukalapak: {
        registered: Registered;
      };
      instagram: {
        registered: Registered;
      };
      microsoft: {
        registered: Registered;
      };
      pinterest: {
        registered: Registered;
      };
      tokopedia: {
        registered: Registered;
      };
      wordpress: {
        registered: Registered;
      };
      archiveorg: {
        registered: Registered;
      };
      disneyplus: {
        registered: Registered;
      };
      foursquare: {
        registered: Registered;
      };
    };
  };
  fraud_score: number;
}

export interface Breach {
  date: string;
  name: string;
  domain: string;
}

type Registered = boolean | null;
