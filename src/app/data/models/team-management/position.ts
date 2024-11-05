interface IPosition {
  id: string;
  name: string;
  alias: string;
  positionIndex: number;
  codeAlias: string;
  codePosition: number;
  positionGroupsName: string;
  playersName: string;
  isOffense: boolean;
  isDefense: boolean;
  positionGroupList: any[];
  playerList: any[];
  editDeleteAccess: boolean;
}
export class Position implements IPosition {
  id: string;
  name: string;
  alias: string;
  positionIndex: number;
  codeAlias: string;
  codePosition: number;
  positionGroupsName: string;
  playersName: string;
  isOffense: boolean;
  isDefense: boolean;
  positionGroupList: any[];
  playerList: any[];
  editDeleteAccess: boolean;
  constructor(position?: IPosition) {
    this.id = (position && position.id) || "";
    this.name = (position && position.name) || "";
    this.alias = (position && position.alias) || "";
    this.positionIndex = (position && position.positionIndex) || 0;
    this.codeAlias = (position && position.codeAlias) || "";
    this.codePosition = (position && position.codePosition) || 0;
    this.positionGroupsName = (position && position.positionGroupsName) || "";
    this.playersName = (position && position.playersName) || "";
    this.isOffense = (position && position.isOffense) || false;
    this.isDefense = (position && position.isDefense) || false;
    this.positionGroupList = (position && position.positionGroupList) || [];
    this.playerList = (position && position.playerList) || [];
    this.editDeleteAccess = (position && position.editDeleteAccess) || false;
  }
}
