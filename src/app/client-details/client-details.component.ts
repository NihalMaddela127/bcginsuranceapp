import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';
import { ClientColumnNames } from '../shared/utils/constants';
import { BoolToStringPipe } from '../pipes/booltostring.pipe';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  policyId;
  clientData;
  clientForm: FormGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly boolToStringPipe: BoolToStringPipe,
    private readonly dashboardService: DashboardService) { }

  ngOnInit() {
    this.policyId = this.route.snapshot.params.id;
    this.dashboardService.getClientsByPolicyId(this.policyId).subscribe((data: any) => {
      this.clientData = data;
      this.clientForm = this.formBuilder.group({});
      this.addControls(data);
    });
  }

  addControls(clientData) {
    for (let client in clientData) {
      if (client !== '_id') {
        let value = clientData[client];
        if (['bodily_injury_liability', 'personal_injury_protection', 'property_damage_liability', 'collision', 'comprehensive'].includes(client)) {
          value = this.boolToStringPipe.transform(clientData[client], ['toggle']);
        } else if (client === 'Customer_Marital_status') {
          value = this.boolToStringPipe.transform(clientData[client], ['marital']);
        }
        this.clientForm.addControl(client, new FormControl(value, Validators.required));
      }
    }
    this.clientForm.controls['Premium'].setValidators(Validators.max(1000000));
    this.clientForm.controls['Date_of_Purchase'].disable();
    this.clientForm.controls['Customer_id'].disable();
    this.clientForm.controls['Policy_id'].disable();
  }

  getFieldName(key) {
    return ClientColumnNames[key];
  }

  save() {
    this.dashboardService.updateClient({...this.clientForm.value, _id: this.clientData._id}).subscribe((data: any) => {
      
    });
  }

}
