interface ProvidersConstructor {
  googleId?: string;
  appleId?: string;
  facebookId?: string;
}
export class Providers {
  private props: ProvidersConstructor;
  constructor(props: ProvidersConstructor) {
    this.props = props;
  }
  public get googleId(): string | undefined {
    return this.props?.googleId;
  }
  public set googleId(googleId: string) {
    this.props.googleId = googleId;
  }
  public get appleId(): string | undefined {
    return this.props?.appleId;
  }
  public set appleId(appleId: string) {
    this.props.appleId = appleId;
  }
  public get facebookId(): string | undefined {
    return this.props?.facebookId;
  }
  public set facebookId(facebookId: string) {
    this.props.facebookId = facebookId;
  }
}
