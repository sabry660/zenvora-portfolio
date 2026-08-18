'use client'

import { useEffect, useRef, useState } from 'react'
import { Code2, Zap, Globe, Shield } from 'lucide-react'

// Simple syntax highlighting function
const highlightCode = (code: string) => {
  // Keywords
  const keywords = ['const', 'let', 'var', 'async', 'await', 'return', 'if', 'else', 'for', 'while', 'class', 'interface', 'type', 'enum', 'private', 'public', 'protected', 'static', 'new', 'this', 'super', 'extends', 'implements', 'import', 'export', 'from', 'default', 'function', 'void', 'null', 'undefined', 'true', 'false']
  
  // Types and interfaces
  const types = ['string', 'number', 'boolean', 'any', 'never', 'unknown', 'Promise', 'Map', 'Set', 'Array', 'Object', 'Date', 'RegExp']
  
  // Built-in methods
  const builtins = ['console', 'log', 'error', 'warn', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', 'JSON', 'parse', 'stringify', 'Math', 'floor', 'ceil', 'round', 'random', 'Date', 'now', 'Promise', 'resolve', 'reject', 'all', 'race']
  
  let highlighted = code
  
  // Comments
  highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="text-[#6b7280] italic">$1</span>')
  
  // Strings
  highlighted = highlighted.replace(/(['"`])(.*?)\1/g, '<span class="text-[#86efac]">$1$2$1</span>')
  
  // Numbers
  highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="text-[#f472b6]">$1</span>')
  
  // Keywords
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'g')
    highlighted = highlighted.replace(regex, '<span class="text-[#f472b6] font-semibold">$1</span>')
  })
  
  // Types
  types.forEach(type => {
    const regex = new RegExp(`\\b(${type})\\b`, 'g')
    highlighted = highlighted.replace(regex, '<span class="text-[#67e8f9]">$1</span>')
  })
  
  // Built-in methods
  builtins.forEach(builtin => {
    const regex = new RegExp(`\\b(${builtin})\\b`, 'g')
    highlighted = highlighted.replace(regex, '<span class="text-[#fbbf24]">$1</span>')
  })
  
  // Function calls
  highlighted = highlighted.replace(/(\w+)\(/g, '<span class="text-[#a78bfa]">$1</span>(')
  
  // Decorators
  highlighted = highlighted.replace(/@(\w+)/g, '<span class="text-[#fb923c]">@$1</span>')
  
  return highlighted
}

const codeSnippets = [
  {
    icon: Code2,
    title: 'Custom Software',
    code: `// Building smart solutions
interface ZenvoraCore {
  software: string
  platforms: Platform[]
  quality: QualityLevel
  architecture: 'microservices' | 'monolith'
}

class ZenvoraEngine {
  private metrics: PerformanceMonitor
  
  constructor(config: ZenvoraConfig) {
    this.metrics = new PerformanceMonitor(config)
  }
  
  @Decorators.Cache(ttl: 3600)
  async build(project: Project): Promise<Solution> {
    const pipeline = await this.createPipeline(project)
    const deployed = await this.deploy(pipeline)
    
    return {
      status: 'deployed',
      url: deployed.url,
      metrics: this.metrics.getStats()
    }
  }
  
  private async createPipeline(p: Project) {
    return Pipeline.builder()
      .withStage('build', { timeout: 180 })
      .withStage('test', { coverage: 0.95 })
      .withStage('deploy', { strategy: 'blue-green' })
      .build()
  }
}`,
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    code: `// Intelligent automation
type WorkflowNode = {
  id: string
  type: 'ai_agent' | 'automation' | 'integration'
  config: AgentConfig
}

class ZenvoraAI {
  private agents: Map<string, AIAgent>
  private orchestrator: WorkflowOrchestrator
  
  async automate(workflow: Workflow): Promise<Result> {
    const graph = this.buildGraph(workflow)
    const execution = await this.orchestrator.execute(graph)
    
    return {
      completed: execution.nodes.length,
      duration: execution.time,
      cost: execution.cost
    }
  }
  
  private buildGraph(w: Workflow): DAG {
    return w.nodes.reduce((dag, node) => {
      dag.addNode(node.id, node)
      w.edges.forEach(edge => {
        dag.addEdge(edge.from, edge.to)
      })
      return dag
    }, new DAG())
  }
}`,
  },
  {
    icon: Globe,
    title: 'Global Reach',
    code: `// Digital growth
enum Region {
  NA = 'north-america',
  EU = 'europe',
  APAC = 'asia-pacific',
  MEA = 'middle-east-africa'
}

class GrowthEngine {
  private seo: SEOOptimizer
  private ads: AdManager
  private analytics: Analytics
  
  async scale(business: Business): Promise<Growth> {
    const [seoScore, adROI] = await Promise.all([
      this.seo.optimize(business),
      this.ads.optimize(business.campaigns)
    ])
    
    return {
      traffic: this.analytics.predictTraffic(seoScore),
      conversions: this.analytics.predictConversions(adROI),
      regions: this.expandToRegions(business)
    }
  }
  
  private expandToRegions(b: Business): Region[] {
    return Object.values(Region).filter(r =>
      b.targetAudience.includes(r)
    )
  }
}`,
  },
  {
    icon: Shield,
    title: 'Cloud & Security',
    code: `// Secure infrastructure
interface SecurityPolicy {
  encryption: 'AES-256' | 'RSA-4096'
  auth: 'OAuth2' | 'JWT' | 'SSO'
  compliance: ComplianceLevel[]
}

class CloudGuard {
  private vault: SecretsManager
  private firewall: Firewall
  private monitoring: SecurityMonitor
  
  async protect(system: System): Promise<SecurityStatus> {
    const scan = await this.vulnerabilityScan(system)
    const patches = await this.applyPatches(scan)
    
    await this.monitoring.enableAlerts({
      severity: ['critical', 'high'],
      channels: ['slack', 'email', 'pagerduty']
    })
    
    return {
      secure: patches.length === 0,
      lastScan: new Date(),
      compliance: this.checkCompliance()
    }
  }
  
  private async vulnerabilityScan(s: System) {
    return await this.firewall.scan({
      depth: 'deep',
      modules: ['sql-injection', 'xss', 'csrf']
    })
  }
}`,
  },
]

export function HeroCodeAnimation() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [typingSpeed, setTypingSpeed] = useState(20)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const typingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const startTyping = () => {
      const fullCode = codeSnippets[activeIndex].code
      let index = 0
      setIsTyping(true)
      setDisplayText('')

      typingIntervalRef.current = setInterval(() => {
        if (index < fullCode.length) {
          setDisplayText(fullCode.slice(0, index + 1))
          index++
        } else {
          clearInterval(typingIntervalRef.current!)
          setIsTyping(false)
          // Wait 7 seconds then switch to next
          setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % codeSnippets.length)
          }, 7000)
        }
      }, typingSpeed) // Dynamic typing speed
    }

    startTyping()

    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current)
    }
  }, [activeIndex, typingSpeed])



  const currentSnippet = codeSnippets[activeIndex]
  const Icon = currentSnippet.icon

  return (
    <div className="relative hidden h-[350px] w-full max-w-[350px] shrink-0 md:block md:h-[400px] md:max-w-[400px] lg:h-[450px] lg:max-w-[500px] xl:h-[500px] xl:max-w-[600px] 2xl:max-w-[700px]">
      {/* Main code editor card */}
      <div className="relative h-full rounded-2xl border border-white/15 bg-[#121414]/80 backdrop-blur-sm p-4 md:p-5 lg:p-6 shadow-2xl">
        {/* Window controls */}
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <div className="flex gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80 md:h-3 md:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 md:h-3 md:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80 md:h-3 md:w-3" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] font-mono text-white/40 md:text-xs">{currentSnippet.title}.ts</span>
          </div>
        </div>

        {/* Code content */}
        <div className="relative h-[calc(100%-3rem)] overflow-hidden">
          <pre className="font-mono text-[10px] leading-relaxed md:text-xs lg:text-sm whitespace-pre-wrap">
            <code 
              className="text-white/90"
              dangerouslySetInnerHTML={{ 
                __html: highlightCode(displayText) 
              }}
            />
            {isTyping && <span className="inline-block w-2 h-3 md:h-4 bg-[#c8e6d9] ml-1 animate-pulse" />}
          </pre>
        </div>

        {/* Floating indicators inside the card */}
        <div className="absolute bottom-4 right-4 flex gap-1.5 md:gap-2 z-10">
          {codeSnippets.map((snippet, index) => {
            const SnippetIcon = snippet.icon
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setActiveIndex(index)
                  // Randomize typing speed between 10-30ms for variety
                  setTypingSpeed(Math.floor(Math.random() * 20) + 10)
                }}
                className={`h-8 w-8 rounded-lg border backdrop-blur-sm transition-all duration-300 md:h-10 md:w-10 ${
                  activeIndex === index
                    ? 'border-[#c8e6d9] bg-[#c8e6d9]/20 scale-110'
                    : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                }`}
                aria-label={`Switch to ${snippet.title}`}
              >
                <SnippetIcon className="h-4 w-4 mx-auto text-white/80 md:h-5 md:w-5" strokeWidth={1.5} />
              </button>
            )
          })}
        </div>

        {/* Decorative glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#c8e6d9]/10 to-transparent opacity-50 blur-xl" />
      </div>
    </div>
  )
}
