package com.bank.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bank.management.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
}