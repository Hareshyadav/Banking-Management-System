package com.bank.management.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.bank.management.dto.AccountDTO;
import com.bank.management.service.AccountService;

@RestController
@RequestMapping("/api/accounts")   // base URL
public class AccountController {

    private final AccountService service;

    public AccountController(AccountService service) {
        this.service = service;
    }

    // CREATE
    @PostMapping("/add-account")
    public AccountDTO create(@RequestBody AccountDTO dto) {
        return service.createAccount(dto);
    }

    // GET ALL
    @GetMapping({"/all-account"})
    public List<AccountDTO> getAll() {
        return service.getAllAccounts();
    }

    // GET BY ID
    @GetMapping("/{id}")
    public AccountDTO getById(@PathVariable Long id) {
        return service.getAccountById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public AccountDTO update(@PathVariable Long id, @RequestBody AccountDTO dto) {
        return service.updateAccount(id, dto);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.deleteAccount(id);
        return "Deleted successfully";
    }
}