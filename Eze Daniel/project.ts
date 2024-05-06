class Contact {
  private _name: string;
  private _phoneNumber: string;
  private _address: string;

  constructor(name: string, phoneNumber: string, address: string) {
    this._name = name;
    this._phoneNumber = phoneNumber;
    this._address = address;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(phoneNumber: string) {
    this._phoneNumber = phoneNumber;
  }

  get address(): string {
    return this._address;
  }

  set address(address: string) {
    this._address = address;
  }

  toString(): string {
    return `Name: ${this._name}, Phone Number: ${this._phoneNumber}, Address: ${this._address}`;
  }
}

class BusinessContact extends Contact {
  private _company: string;

  constructor(
    name: string,
    phoneNumber: string,
    address: string,
    company: string
  ) {
    super(name, phoneNumber, address);
    this._company = company;
  }

  get company(): string {
    return this._company;
  }

  set company(company: string) {
    this._company = company;
  }

  toString(): string {
    return `${super.toString()}, Company: ${this._company}`;
  }
}

// Example usage
let personalContact = new Contact("John Doe", "123-456-7890", "123 Main St");
console.log("Personal Contact:");
console.log(personalContact.toString());

let businessContact = new BusinessContact(
  "Jane Smith",
  "987-654-3210",
  "456 Elm St",
  "XYZ Corp"
);
console.log("\nBusiness Contact:");
console.log(businessContact.toString());
