import { ArrowDown, Check } from 'lucide-react'
import Link from 'next/link'
import { GlassPanel } from 'ui-patterns/GlassPanel'
import { IconPanel } from 'ui-patterns/IconPanel'
import { ThemeImage } from 'ui-patterns/ThemeImage'
import { Button } from 'ui/client'
import { Admonition } from 'ui/server'
import { AppleSecretGenerator } from '~/components/AppleSecretGenerator'
import AuthProviders from '~/components/AuthProviders'
import ButtonCard from '~/components/ButtonCard'
import { Heading } from '~/components/CustomHTMLElements'
import { Extensions } from '~/components/Extensions'
import { JwtGenerator } from '~/components/JwtGenerator'
import {
  DatabaseSetup,
  GetSessionWarning,
  HuggingFaceDeployment,
  KotlinProjectSetup,
  MigrationWarnings,
  ProjectSetup,
  QuickstartIntro,
  SocialProviderSettingsSupabase,
  SocialProviderSetup,
} from '~/components/MDX/partials'
import { Mermaid } from '~/components/Mermaid'
import { NavData } from '~/components/NavData'
import { ProjectConfigVariables } from '~/components/ProjectConfigVariables'
import { RealtimeLimitsEstimator } from '~/components/RealtimeLimitsEstimator'
import { SharedData } from '~/components/SharedData'
import StepHikeCompact from '~/components/StepHikeCompact'
import { Accordion, AccordionItem } from '~/features/ui/Accordion'
import * as CH from '~/features/ui/CodeHike'
import { Tabs, TabPanel } from '~/features/ui/Tabs'

const components = {
  Accordion,
  AccordionItem,
  Admonition,
  AppleSecretGenerator,
  AuthProviders,
  Button,
  ButtonCard,
  CH,
  DatabaseSetup,
  Extensions,
  GetSessionWarning,
  GlassPanel,
  HuggingFaceDeployment,
  IconArrowDown: ArrowDown,
  IconCheck: Check,
  IconPanel,
  Image: (props: any) => <ThemeImage fill className="object-contain" {...props} />,
  JwtGenerator,
  KotlinProjectSetup,
  Link,
  Mermaid,
  MigrationWarnings,
  NavData,
  ProjectConfigVariables,
  ProjectSetup,
  QuickstartIntro,
  RealtimeLimitsEstimator,
  SharedData,
  SocialProviderSettingsSupabase,
  SocialProviderSetup,
  StepHikeCompact,
  Tabs,
  TabPanel,
  h2: (props: any) => (
    <Heading tag="h2" {...props}>
      {props.children}
    </Heading>
  ),
  h3: (props: any) => (
    <Heading tag="h3" {...props}>
      {props.children}
    </Heading>
  ),
  h4: (props: any) => (
    <Heading tag="h4" {...props}>
      {props.children}
    </Heading>
  ),
}

export { components }