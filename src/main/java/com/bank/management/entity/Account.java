package com.bank.management.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "accounts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String accountHolderName;
    private String accountNumber;
    private Double balance;
}