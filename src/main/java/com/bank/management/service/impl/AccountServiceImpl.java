package com.bank.management.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bank.management.dto.AccountDTO;
import com.bank.management.entity.Account;
import com.bank.management.repository.AccountRepository;
import com.bank.management.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService {

    private final AccountRepository repository;

    public AccountServiceImpl(AccountRepository repository) {
        this.repository = repository;
    }

    private AccountDTO mapToDTO(Account account) {
        return new AccountDTO(
                account.getId(),
                account.getAccountHolderName(),
                account.getAccountNumber(),
                account.getBalance()
        );
    }

    private Account mapToEntity(AccountDTO dto) {
        return new Account(
                dto.getId(),
                dto.getAccountHolderName(),
                dto.getAccountNumber(),
                dto.getBalance()
        );
    }

    @Override
    public AccountDTO createAccount(AccountDTO dto) {
        Account saved = repository.save(mapToEntity(dto));
        return mapToDTO(saved);
    }

    @Override
    public AccountDTO getAccountById(Long id) {
        Account acc = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found"));
        return mapToDTO(acc);
    }

    @Override
    public List<AccountDTO> getAllAccounts() {
        return repository.findAll()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public AccountDTO updateAccount(Long id, AccountDTO dto) {
        Account acc = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        acc.setAccountHolderName(dto.getAccountHolderName());
        acc.setAccountNumber(dto.getAccountNumber());
        acc.setBalance(dto.getBalance());

        return mapToDTO(repository.save(acc));
    }

    @Override
    public void deleteAccount(Long id) {
        repository.deleteById(id);
    }
}