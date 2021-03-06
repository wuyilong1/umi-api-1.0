'use strict';
// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
let __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
  let c = arguments.length, 
r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, 
d;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc);
  else for (let i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let __metadata = (this && this.__metadata) || function(k, v) {
  if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
};
Object.defineProperty(exports, '__esModule', { value: true });
const typeorm_1 = require('typeorm');
let CasbinRule = class CasbinRule extends typeorm_1.BaseEntity {
};
__decorate([
  typeorm_1.PrimaryGeneratedColumn(),
  __metadata('design:type', Number),
], CasbinRule.prototype, 'id', void 0);
__decorate([
  typeorm_1.Column({
    nullable: true,
  }),
  __metadata('design:type', String),
], CasbinRule.prototype, 'ptype', void 0);
__decorate([
  typeorm_1.Column({
    nullable: true,
  }),
  __metadata('design:type', String),
], CasbinRule.prototype, 'v0', void 0);
__decorate([
  typeorm_1.Column({
    nullable: true,
  }),
  __metadata('design:type', String),
], CasbinRule.prototype, 'v1', void 0);
__decorate([
  typeorm_1.Column({
    nullable: true,
  }),
  __metadata('design:type', String),
], CasbinRule.prototype, 'v2', void 0);
__decorate([
  typeorm_1.Column({
    nullable: true,
  }),
  __metadata('design:type', String),
], CasbinRule.prototype, 'v3', void 0);
__decorate([
  typeorm_1.Column({
    nullable: true,
  }),
  __metadata('design:type', String),
], CasbinRule.prototype, 'v4', void 0);
__decorate([
  typeorm_1.Column({
    nullable: true,
  }),
  __metadata('design:type', String),
], CasbinRule.prototype, 'v5', void 0);
CasbinRule = __decorate([
  typeorm_1.Entity(),
], CasbinRule);

exports.CasbinRule = CasbinRule;
