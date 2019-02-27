package com.propellerhead.constants;

/**
 * Created by gaoshan on 26/02/19.
 */
public enum CustomerStatus {

    NONACTIVE(0,"non-active"), CURRENT(1,"current"),PROSPECTIVE(2,"prospective");

    private int index;
    private String name;

    CustomerStatus(int index, String name) {
        this.index = index;
        this.name = name;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static CustomerStatus getByIndex(int index) {
        for (CustomerStatus customerStatus : CustomerStatus.values()) {
            if (index == customerStatus.getIndex())
                return customerStatus;
        }
        return null;
    }
}
