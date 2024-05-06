/\*\*

- Represents a contact with basic information such as name, phone number, and address.
  _/
  class Contact {
  /\*\*
  _ Creates a new instance of the Contact class.
  _ @param name The name of the contact.
  _ @param phoneNumber The phone number of the contact.
  _ @param address The address of the contact.
  _/
  constructor(name: string, phoneNumber: string, address: string);

      /**
       * Gets the name of the contact.
       */
      get name(): string;

      /**
       * Sets the name of the contact.
       */
      set name(name: string);

      /**
       * Gets the phone number of the contact.
       */
      get phoneNumber(): string;

      /**
       * Sets the phone number of the contact.
       */
      set phoneNumber(phoneNumber: string);

      /**
       * Gets the address of the contact.
       */
      get address(): string;

      /**
       * Sets the address of the contact.
       */
      set address(address: string);

      /**
       * Returns a string representation of the contact.
       */
      toString(): string;

  }

/\*\*

- Represents a business contact with additional company information.
  _/
  class BusinessContact extends Contact {
  /\*\*
  _ Creates a new instance of the BusinessContact class.
  _ @param name The name of the contact.
  _ @param phoneNumber The phone number of the contact.
  _ @param address The address of the contact.
  _ @param company The company associated with the contact.
  \*/
  constructor(name: string, phoneNumber: string, address: string, company: string);

      /**
       * Gets the company associated with the contact.
       */
      get company(): string;

      /**
       * Sets the company associated with the contact.
       */
      set company(company: string);

      /**
       * Returns a string representation of the business contact.
       */
      toString(): string;

  }

// Example usage
let personalContact = new Contact("John Doe", "123-456-7890", "123 Main St");
let businessContact = new BusinessContact("Jane Smith", "987-654-3210", "456 Elm St", "XYZ Corp");
