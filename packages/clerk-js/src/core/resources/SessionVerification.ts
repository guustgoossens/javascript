import type {
  SessionResource,
  SessionVerificationJSON,
  SessionVerificationResource,
  SessionVerificationStatus,
  VerificationResource,
} from '@clerk/types';

import { BaseResource, Session, Verification } from './internal';

export class SessionVerification extends BaseResource implements SessionVerificationResource {
  status!: SessionVerificationStatus;
  session!: SessionResource;
  firstFactorVerification: VerificationResource = new Verification(null);
  secondFactorVerification: VerificationResource = new Verification(null);

  constructor(data: SessionVerificationJSON | null = null) {
    super();
    this.fromJSON(data);
  }

  protected fromJSON(data: SessionVerificationJSON | null): this {
    if (data) {
      this.id = data.id;
      this.status = data.status;
      this.session = new Session(data.session);
      this.firstFactorVerification = new Verification(data.first_factor_verification);
      this.secondFactorVerification = new Verification(data.second_factor_verification);
    }
    return this;
  }
}
