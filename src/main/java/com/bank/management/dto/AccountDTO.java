package com.bank.management.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountDTO {

    private Long id;
    private String accountHolderName;
    private String accountNumber;
    private Double balance;


}