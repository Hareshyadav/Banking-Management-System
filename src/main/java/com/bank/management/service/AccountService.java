package com.bank.management.service;

import java.util.List;
import com.bank.management.dto.AccountDTO;

public interface AccountService {

    AccountDTO createAccount(AccountDTO dto);

    AccountDTO getAccountById(Long id);

    List<AccountDTO> getAllAccounts();

    AccountDTO updateAccount(Long id, AccountDTO dto);

    void deleteAccount(Long id);
}