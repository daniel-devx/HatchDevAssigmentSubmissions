// // Address class representing an address
// class Address {
//   street: string;
//   city: string;
//   zipCode: string;

//   constructor(street: string, city: string, zipCode: string) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
//   }

//   // Method to format address as a string
//   formatAddress(): string {
//     return `${this.street}, ${this.city}, ${this.zipCode}`;
//   }
// }

// // Person class representing a person
// class Person {
//   name: string;
//   age: number;
//   address: Address;

//   constructor(name: string, age: number, address: Address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   // Method to describe person
//   describe(): string {
//     return `${this.name} is ${
//       this.age
//     } years old, living at ${this.address.formatAddress()}`;
//   }
// }

// // Usage
// const address = new Address("123 Main St", "Cityville", "12345");
// const person = new Person("John Doe", 30, address);

// console.log(person.describe());
class Laptop {
  private allUpdateLogs: string[] = [];
  Keyboard: KeyBoard[];
  nic: nic; //NetWorkInterfaceCard;
  display: Display;
  hd: HardDisk;
  powerState: powerState;
  bit: Bitkind;
  version: string;
  versionNum: versionNum;
  Os: Oskind;
  constructor(
    bit: Bitkind,
    display: Display,
    hd: HardDisk,
    nic: nic, //NetWorkInterfaceCard,
    Keyboard: KeyBoard[],
    Os: Oskind,
    version: string,
    versionNum: versionNum
  ) {
    this.bit = bit;
    this.Keyboard = Keyboard;
    this.nic = nic;
    this.display = display;
    this.powerState = new powerState();
    this.hd = hd;
    this.Os = Os;
    this.version = version;
    this.versionNum = versionNum;
  } //constructor builds the structure of a class

  shutDown() {
    this.powerState = new powerState();
  }
  update<T extends keyof Laptop>(thingToUpdate: T, newValue: Laptop[T]) {
    let error: string = "";
    switch (thingToUpdate) {
      case "bit":
        if (!["x64", "x86", "x32"].includes(newValue as string)) {
          error = "Invalid input: The new value must be a number";
          return;
        }
        this.bit = newValue as Bitkind;
        this.allUpdateLogs.push(`Bit updated: ${newValue}`);
        break;
      case "Keyboard":
        if (!(newValue instanceof KeyBoard)) {
          error =
            "Invalid input: The new value must be an instance of Keyboard";
          return;
        }
        this.Keyboard.push(newValue);
        this.allUpdateLogs.push(
          `Keyboard updated: ${newValue.kind} keyboard with ${newValue.layout} layout`
        );
        break;
      case "nic":
        if (!(newValue instanceof nic)) {
          error = "Invalid input: The new value must be a string";
          return;
        }
        this.nic = newValue;
        this.allUpdateLogs.push(`NIC updated: ${newValue}`);
        break;
      case "display":
        if (!(newValue instanceof Display)) {
          error = "Invalid input: The new value must be an instance of Display";
          return;
        }
        this.display = newValue;
        this.allUpdateLogs.push(
          `Display updated: ${newValue.size} inches ${newValue.type} display`
        );
        break;
      case "powerState":
        if (!(newValue instanceof powerState)) {
          error =
            "Invalid input: The new value must be an instance of powerState";
          return;
        }
        this.powerState = newValue;
        this.allUpdateLogs.push(`Power state updated to: ${newValue}`);
        break;
      case "hd":
        if (!(newValue instanceof HardDisk)) {
          error =
            "Invalid input: The new value must be an instance of HardDisk";
          return;
        }
        this.hd = newValue;
        this.allUpdateLogs.push(`HardDisk updated: ${newValue.type}`);
        break;
      case "Os":
        if (!["Linux", "windows", "Mac"].includes(newValue as string)) {
          error = "Invalid input: The new value must be an instance of OS";
          return;
        }
        this.Os = newValue as Oskind;
        this.allUpdateLogs.push(`OS updated: ${newValue}`);
        break;
      case "version":
        if (!(newValue instanceof version)) {
          error = "Invalid input: The new value must be an instance of version";
          return;
        }
        this.version = newValue as string;
        this.allUpdateLogs.push(`version updated:${newValue}`);
      case "versionNum":
        if (!(newValue instanceof versionNum)) {
          error =
            "Invalid input: The new value must be an instance of version Number";
          return;
        }
        this.versionNum = newValue;
        this.allUpdateLogs.push(`version Number updated:${newValue}`);
      default:
        console.log("Invalid input");
    }

    console.log(error);
    this.showAllUpdateLogs();
  }
  private showAllUpdateLogs() {
    console.log(this.allUpdateLogs);
  }
  switchOn() {
    this.powerState = new powerState();
  }
}
type Oskind = "Linux" | "windows" | "Mac";
type Bitkind = "x64" | "x86" | "x32";
class Display {
  size: DisPlaynumber;
  type: DisplaySize;
}
type DisPlaynumber = 25 | 67 | 57;
type DisplaySize = "amoled" | "LCD" | "OLED";
class powerState {
  type: boolean;
}
class versionNum {
  type: VersionNumber;
}
type VersionNumber =
  | "MB4567890123"
  | "MTHRBRD-ABCDE12345"
  | "987654-MB-3210"
  | "MBXZC-890-ABCD"
  | "MB-XYZ123-456789";
class HardDisk {
  type: HardDiskType;
  size: HardDiskSize;
}
type HardDiskType = "SSD" | "HDD";
type HardDiskSize = 128 | 256 | 512 | 1024;
class nic {
  name: NetWorkIC; //NetWorkIC; //we can declare name as public in a constructor
}
type NetWorkIC =
  | "Intel Gigabit"
  | "Intel Ethernet "
  | "Realtek PCIe GbE"
  | "Broadcom NetXtreme"
  | "TP-Link Archer T6E AC1300"
  | "";
class version {
  versionT: versionType;
}
type versionType =
  | "NVIDIA"
  | "AMD Radeon RX"
  | "Nvidia GeForce RTX"
  | "Intel Core i7-14700K"
  | "Intel Core i9-14900K"
  | "Intel Core i5-11600K";
//type NetWorkIC = "PCI" | "ISA" | "PCle" | "USB";
class KeyBoard {
  kind: KeyBoardKind;
  layout: KeyBoardLayout;
}
type KeyBoardKind = "in-Built" | "external";
type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty";

// const display = new Display();
// display.displaySize = 16; //we have assign the value to the property
// display.setDisplaytype("amoled");
// const nic = new NetWorkInterfaceCard("ISA");
// //nic.name = "USB";
// const hd = new HardDisk();
// //hd.size = 200;
// hd.type = "SSD";
// const KeyBoardtype = new KeyBoard();
// KeyBoardtype.kind = "in-Built";
// KeyBoardtype.layout = "Qwerty";
const nitlap = new Laptop(
  "x64",
  { size: 25, type: "LCD" },
  { type: "SSD", size: 512 },
  { name: "Intel Gigabit" },
  [{ kind: "in-Built", layout: "Qwerty" }],
  "Windows" as Oskind,
  "NVIDIA",
  { type: "MB4567890123" }
);
console.log(nitlap);
//
nitlap.update("Os", "Mac");
nitlap.update("bit", "x64");
//nitlap.update("hd", "");
console.log(nitlap);
