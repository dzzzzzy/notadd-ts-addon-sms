"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const sms_template_entity_1 = require("./sms-template.entity");
let SmsLog = class SmsLog {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        comment: "自增ID"
    }),
    __metadata("design:type", Number)
], SmsLog.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        name: "send_time",
        comment: "发送时间"
    }),
    __metadata("design:type", Date)
], SmsLog.prototype, "sendTime", void 0);
__decorate([
    typeorm_1.Column({
        name: "target_mobile",
        comment: "短信接收手机号"
    }),
    __metadata("design:type", String)
], SmsLog.prototype, "targetMobile", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sms_template_entity_1.SmsTemplate, smsTemplate => smsTemplate.smsLogs, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: "sms_templateId"
    }),
    __metadata("design:type", sms_template_entity_1.SmsTemplate)
], SmsLog.prototype, "smsTemplate", void 0);
__decorate([
    typeorm_1.Column({
        name: "template_param",
        nullable: true,
        comment: "短信参数"
    }),
    __metadata("design:type", String)
], SmsLog.prototype, "templateParam", void 0);
__decorate([
    typeorm_1.Column({
        name: "validation_code",
        comment: "短信验证码",
        nullable: true
    }),
    __metadata("design:type", Number)
], SmsLog.prototype, "validationCode", void 0);
__decorate([
    typeorm_1.Column({
        name: "validation_time",
        comment: "验证码有效期",
        nullable: true
    }),
    __metadata("design:type", Number)
], SmsLog.prototype, "validationTime", void 0);
__decorate([
    typeorm_1.Column({
        name: "is_success",
        comment: "是否发送成功"
    }),
    __metadata("design:type", Boolean)
], SmsLog.prototype, "isSuccess", void 0);
__decorate([
    typeorm_1.Column({
        name: "response_code",
        comment: "云服务返回的状态码"
    }),
    __metadata("design:type", String)
], SmsLog.prototype, "responseCode", void 0);
__decorate([
    typeorm_1.Column({
        name: "response_message",
        comment: "云服务返回的消息"
    }),
    __metadata("design:type", String)
], SmsLog.prototype, "responseMessage", void 0);
SmsLog = __decorate([
    typeorm_1.Entity("sms_log")
], SmsLog);
exports.SmsLog = SmsLog;

//# sourceMappingURL=sms-log.entity.js.map
