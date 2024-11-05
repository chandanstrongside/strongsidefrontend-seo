interface  IOrganization{
    organizationName:string;
    mascot:string;
    phone:string;
    name:string;
    lastName:string;
    address:string;
    email:string;
    postal: string;
}


export class Organization {
    organizationName:string;
    mascot:string;
    phone:string;
    name:string;
    lastName:string;
    address:string;
    email:string;
    postal: string;
    constructor(organization?: IOrganization) {
        this.organizationName = organization && organization.organizationName ||'';
        this.mascot = organization && organization.mascot ||'';
        this.phone = organization && organization.phone ||'';
        this.lastName = organization && organization.lastName ||'';
        this.name = organization && organization.name ||'';
        this.address = organization && organization.address ||'';
        this.email = organization && organization.email ||'';
        this.postal = organization && organization.postal ||'';
       
    }
}

