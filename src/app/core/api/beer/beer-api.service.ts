import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { API_BEER_ITEM, API_BEER_LIST } from "src/environments/urls";
import { BeerItem } from "../../interfaces/beer-item";

@Injectable({
  providedIn: 'root',
})
export class BeerApiService {
  constructor(private httpClient: HttpClient) {}

  getBeerList(pageIndex: number = 1): Observable<BeerItem[]> {
    let params = new HttpParams()
      .set('page', pageIndex)
      .set('per_page', 5);

    return this.httpClient.get<BeerItem[]>(
      API_BEER_LIST, {params}
    );
  }  

  getBeerItem(id: number): Observable<BeerItem> {
    return this.httpClient.get<BeerItem[]>(
      API_BEER_ITEM(id)
    )
    .pipe(
      map(list => this.parseBeerItem(list))
    );
  }

  parseBeerItem(list: BeerItem[]): BeerItem {
    let beerItem = list.map(item => ({
      id: item.id,
      name: item.name,
      image_url: item.image_url,
      abv: item.abv,
      description: item.description,
      food_pairing: item.food_pairing
    }));

    return beerItem[0];
  }
}