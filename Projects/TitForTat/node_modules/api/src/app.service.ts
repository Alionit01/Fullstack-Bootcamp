import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './entity/offer.entity';
import { ExchangeRequest } from './exchangeRequest/exchange-request.entity';

interface User {
  id: number;
  name: string;
  email: string;
  password: string; // hashed
}

@Injectable()
export class AppService {
  private users: User[] = [];
  private idCounter = 1;

  constructor(
    private jwtService: JwtService,
    @InjectRepository(Offer) private offerRepo: Repository<Offer>,
    @InjectRepository(ExchangeRequest) private exchangeRepo: Repository<ExchangeRequest>,
  ) {}

  async signup(name: string, email: string, password: string) {
    if (this.users.find(u => u.email === email)) {
      throw new Error('Email already exists');
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = { id: this.idCounter++, name, email, password: hashed };
    this.users.push(user);
    const token = this.jwtService.sign({ sub: user.id, email: user.email, name: user.name });
    return { user: { id: user.id, name: user.name, email: user.email }, token };
  }

  async login(email: string, password: string) {
    const user = this.users.find(u => u.email === email);
    if (!user) throw new Error('Invalid credentials');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Invalid credentials');
    const token = this.jwtService.sign({ sub: user.id, email: user.email, name: user.name });
    return { user: { id: user.id, name: user.name, email: user.email }, token };
  }

  // CREATE
  async createOffer(data: Partial<Offer>) {
    const offer = this.offerRepo.create(data);
    return this.offerRepo.save(offer);
  }

  // READ ALL
  async getOffers() {
    return this.offerRepo.find();
  }

  // READ BY USER
  async getOffersByUser(userId: number) {
    return this.offerRepo.find({ where: { userId } });
  }

  // UPDATE
  async updateOffer(id: number, data: Partial<Offer>) {
    await this.offerRepo.update(id, data);
    return this.offerRepo.findOne({ where: { id } });
  }

  // DELETE
  async deleteOffer(id: number) {
    await this.offerRepo.delete(id);
    return { deleted: true };
  }

  // Create a new exchange request
  async createExchangeRequest(data: Partial<ExchangeRequest>) {
    const req = this.exchangeRepo.create(data);
    return this.exchangeRepo.save(req);
  }

  // Get all requests for a user's offers
  async getExchangeRequestsForUser(userId: number) {
    // Find all offers by this user
    const offers = await this.offerRepo.find({ where: { userId } });
    const offerIds = offers.map(o => o.id);
    return this.exchangeRepo.find({ where: { offerId: offerIds } });
  }

  // Update request status
  async updateExchangeRequest(id: number, status: 'accepted' | 'declined') {
    await this.exchangeRepo.update(id, { status });
    return this.exchangeRepo.findOne({ where: { id } });
  }
}
