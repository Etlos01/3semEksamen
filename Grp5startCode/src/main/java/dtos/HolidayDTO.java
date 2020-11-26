/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dtos;

import java.util.Date;

/**
 *
 * @author Alex Wagner
 */
public class HolidayDTO {

    String date;
    String name;
    String localName;
    String countryCode;

    public HolidayDTO(String date, String localName, String name, String countryCode) {
        this.date = date;
        this.name = name;
        this.countryCode = countryCode;
    }

    public HolidayDTO(HolidayDTO h) {
        this.date = h.date;
        this.name = h.name;
        this.localName = h.localName;
        this.countryCode = h.countryCode;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getLocalName() {
        return localName;
    }

    public void setLocalName(String localName) {
        this.localName = localName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

}
