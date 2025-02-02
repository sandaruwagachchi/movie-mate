package com.example.moviemate.service;

import com.example.moviemate.data.Bill;
import com.example.moviemate.data.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    public Bill createBill(Bill bill){
        return billRepository.save(bill);
    }

    public List<Bill> getAllBills(){
        return billRepository.findAll();
    }

    public Bill getBillById(int id){
        Optional<Bill> bill = billRepository.findById(id);
        return bill.orElse(null);
    }

    public String deleteBill(int id){
        billRepository.deleteById(id);
        return " Bill Deleted Successfully!";
    }



}
