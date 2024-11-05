import { Component, OnInit } from '@angular/core';
import { Player } from '../../../data/models/team-management';
import { PersonnelGroupService, PlayerService } from '../../../data/services/team-management';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { DragulaModule } from 'ngx-dragula';

@Component({
  selector: 'app-depth-chart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './depth-chart.component.html',
  styleUrls: ['./depth-chart.component.css']
})
export class DepthChartComponent implements OnInit {
  public players: Player[] = [];
  public positions: any[] = []

  constructor(
    private playerService: PlayerService,
    private personnelGroupService: PersonnelGroupService
  ) { }

  ngOnInit(): void {
    this.playerService.getAllGlobal().subscribe(resp => {
      this.players = resp;
    });
    this.personnelGroupService.getBasePositions().subscribe(resp => {
      this.positions = resp;
    });
  }

}
