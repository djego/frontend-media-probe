import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Home from './Home';

afterEach(cleanup);

const mockResponse = {
    "status": "OK",
    "copyright": "Copyright (c) 2021 The New York Times Company.  All Rights Reserved.",
    "num_results": 20,
    "results": [
        {
            "uri": "nyt://article/a9e42c70-d161-5c0d-a8c5-46fa37fa0e0b",
            "url": "https://www.nytimes.com/2021/03/25/business/auto-shop-pennies.html",
            "id": 100000007671920,
            "asset_id": 100000007671920,
            "source": "New York Times",
            "published_date": "2021-03-25",
            "updated": "2021-03-26 13:08:27",
            "section": "Business",
            "subsection": "",
            "nytdsection": "business",
            "adx_keywords": "Automobile Service and Charging Stations;Wages and Salaries;Currency;Workplace Hazards and Violations;A OK Walker Luxury Autoworks (Peachtree City, Ga);Peachtree City (Ga)",
            "column": null,
            "byline": "By Heather Murphy",
            "type": "Article",
            "title": "A Man Demanded His Final Paycheck. The Auto Shop Delivered 91,500 Greasy Pennies.",
            "abstract": "It’s not technically illegal to do so, according to the Department of Labor, but that doesn’t make it OK, according to the former employee’s new Instagram fans.",
            "des_facet": [
              "Automobile Service and Charging Stations",
              "Wages and Salaries",
              "Currency",
              "Workplace Hazards and Violations"
            ],
            "org_facet": [
              "A OK Walker Luxury Autoworks (Peachtree City, Ga)"
            ],
            "per_facet": [],
            "geo_facet": [
              "Peachtree City (Ga)"
            ],
            "media": [
              {
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Olivia Oxley",
                "approved_for_syndication": 1,
                "media-metadata": [
                  {
                    "url": "https://static01.nyt.com/images/2021/03/24/multimedia/24xp-pennies-04/24xp-pennies-04-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75
                  },
                  {
                    "url": "https://static01.nyt.com/images/2021/03/24/multimedia/24xp-pennies-04/24xp-pennies-04-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210
                  },
                  {
                    "url": "https://static01.nyt.com/images/2021/03/24/multimedia/24xp-pennies-04/24xp-pennies-04-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440
                  }
                ]
              }
            ],
            "eta_id": 0
          }
    ]
}
test('renders learn react link', () => {
    render(<Home />);
    const title = screen.getByText(/Media Probe/i);
    expect(title).toBeInTheDocument();
});
