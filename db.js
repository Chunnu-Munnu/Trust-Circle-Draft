const fs = require('fs');

class Database {
  constructor() {
    this.residents = [];
    this.vendors = [];
    this.admins = [];
  }

  loadResidents() {
    fs.readFile('residents.json', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.residents = JSON.parse(data);
      }
    });
  }

  loadVendors() {
    fs.readFile('vendors.json', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.vendors = JSON.parse(data);
      }
    });
  }

  loadAdmins() {
    fs.readFile('admins.json', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.admins = JSON.parse(data);
      }
    });
  }

  saveResidents() {
    fs.writeFile('residents.json', JSON.stringify(this.residents), (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  saveVendors() {
    fs.writeFile('vendors.json', JSON.stringify(this.vendors), (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  saveAdmins() {
    fs.writeFile('admins.json', JSON.stringify(this.admins), (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  addResident(resident) {
    this.residents.push(resident);
    this.saveResidents();
  }

  addVendor(vendor) {
    this.vendors.push(vendor);
    this.saveVendors();
  }

  addAdmin(admin) {
    this.admins.push(admin);
    this.saveAdmins();
  }

  getResidents() {
    return this.residents;
  }

  getVendors() {
    return this.vendors;
  }

  getAdmins() {
    return this.admins;
  }
}

module.exports = Database;