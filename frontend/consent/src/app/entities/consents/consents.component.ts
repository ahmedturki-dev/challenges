import {Component, OnInit, ViewChild} from '@angular/core';
import {IConsent} from "../consent/consent.model";
import {MatTableDataSource} from "@angular/material/table";
import {ConsentService} from "../consent/consent.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  consents: MatTableDataSource<IConsent>;
  consentsLength: number;

  displayedColumns: string[] = ['name', 'email', 'types'];

  constructor(private consentService: ConsentService) {
  }


  ngOnInit(): void {
    this.consentService.get().subscribe((res: IConsent[]) => {
      this.consents = new MatTableDataSource<IConsent>(res);
      this.consents.paginator = this.paginator;
      this.consentsLength = res.length;
    })
  }

}
