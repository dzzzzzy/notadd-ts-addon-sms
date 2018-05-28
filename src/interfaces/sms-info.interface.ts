export interface SmsInfo {
    code: number;

    message: string;

    data: Array<SmsData>;
}

export interface SmsData {
    appId: string;

    signName: string;

    templates: Array<SmsTemplateData>;

    validationTime: number;
}

export interface SmsTemplateData {
    templateId: string;

    name: string;

    remark: string;
}
